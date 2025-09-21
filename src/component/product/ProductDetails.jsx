import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function ProductDetails() {
  let [singleProduct, setSingleProduct] = useState({});

  let { id } = useParams();
  console.log(id);

  useEffect(() => {
    getProductInfo();
  }, []);

  async function getProductInfo() {
    let res = await fetch(`https://fakestoreapi.com/products/${id}`);
    // let res = await fetch(`https://fakestoreapi.in/api/products`);
    let data = await res.json();

    // const product = data.products.find((item) => item.id.toString() === id);

    console.log(data);
    setSingleProduct(data);
    // console.log(product);
    // setSingleProduct(product);
  }
  let { image, brand, category, color, price, title, description } =
    singleProduct;

  return (
    <>
      <section className="container-fluid">
        <div className="row">
          <div className="col-8 m-auto" key={singleProduct.id}>
            <div className="card my-5 ">
              <div className="card-header text-center bg-black text-warning">
                <h1>{title}</h1>
              </div>
              <div className="row  ">
                <div className="col-4 ">
                  <div className="card-body ">
                    <img src={image} alt={brand} className="img-fluid" />
                  </div>
                </div>
                <div className="col-6">
                  <h5 className="fw-bold mt-5">{title}</h5>
                  <p>{description}</p>
                  <p className="fw-bold">{`Price: $${price}`}</p>
                  <p className="fw-bold">{`Category: ${category}`}</p>
                  <p className="fw-bold">{`Color: ${color}`}</p>
                </div>
              </div>
              <div className="mb-3 d-flex justify-content-evenly">
                <Link to="/products">
                  <button className="btn btn-warning">{"Back"}</button>
                </Link>
                <Link to="/cart">
                  <button className="btn btn-dark">{"Add to Cart"}</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
