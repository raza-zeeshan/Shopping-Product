import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import ErrorMsg from "./ErrorMsg";
import { Link } from "react-router";

export default function Products() {
  let [products, setProducts] = useState([]);
  let [isLoading, setIsLoading] = useState(false);
  let [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    getProductInfo();
  }, []);

  async function getProductInfo() {
    try {
      setIsLoading(true);
      let res = await fetch("https://fakestoreapi.com/products");

      if (!res.ok) throw new Error("Something Went Wrong, Fail to fetch");
      let data = await res.json();
      console.log(data);
      setProducts(data);
      setIsLoading(false);
    } catch (err) {
      setErrorMsg(err.message);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  }

  //   if (products.length === 0) return <Shimmer />;

  return (
    <>
      <section className="container-fluid mt-5">
        <div className="row">
          {isLoading && <Shimmer />}

          {!isLoading &&
            !errorMsg &&
            products.map((product) => {
              let { image, price, title } = product;

              return (
                <div className="col-md-3 mb-3" key={product.id}>
                  <div className="card">
                    <Link to={`/products/${product.id}`}>
                      <div className="card-header">
                        <img src={image} alt={title} />
                      </div>
                      <div className="card-body text-center">
                        <h2>{title}</h2>
                        <h3> 💲{price}</h3>
                      </div>
                    </Link>
                    <div className="card-footer d-flex justify-content-around">
                      <Link to="/cart">
                        <button className="btn btn-primary btn-sm">
                          Add to Cart
                        </button>
                      </Link>
                      <button className="btn btn-success btn-sm">
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          {errorMsg && <ErrorMsg erroeMsg={errorMsg} />}
        </div>
      </section>
    </>
  );
}
