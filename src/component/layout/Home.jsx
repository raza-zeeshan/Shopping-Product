import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      <section className="landing-page  d-flex flex-column justify-content-center align-items-center ">
        <h2 className=" fs-1 fw-bold text-warning">Shop With Us </h2>
        <p className="lead text-center text-black">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore,
          itaque accusamus! Velit minus laborum non commodi expedita, hic
          voluptatum assumenda tempore deserunt fuga, debitis atque
          reprehenderit itaque dignissimos, laudantium aperiam vitae officiis
          officia ut alias odio quis eius ipsum dolorem. Illo consequatur,
          soluta nihil minus dolores ab recusandae provident vero quam neque et
          possimus facere id. Reprehenderit quisquam quos cum, vitae accusantium
          atque voluptas vero delectus unde, placeat itaque. Accusamus, expedita
          ea. Deserunt commodi minima, dignissimos rem, nulla alias provident
          illo, nemo saepe voluptatem maiores voluptas. Vitae laborum quasi vel
          rerum, cum aliquam explicabo ab nemo repudiandae omnis deserunt.
          Distinctio.
        </p>
        <Link to="/products">
          <button className="btn btn-warning text-black">SHOP NOW</button>
        </Link>
      </section>
    </>
  );
}
