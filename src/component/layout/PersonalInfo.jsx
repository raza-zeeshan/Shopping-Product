import { Link, Outlet } from "react-router";

export default function PersonalInfo() {
  return (
    <>
      <section className="container-fluid">
        <h1>Personal Information</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          quia repellat omnis accusantium voluptates, adipisci corrupti aliquid
          atque. Quasi, alias et aperiam quibusdam deleniti cum reiciendis
          voluptatum vel rerum! Iste nemo doloremque tempora quisquam suscipit
          facilis dolorum? Magnam consequatur obcaecati, voluptatum sint, ullam,
          esse animi ut similique fugit iure fugiat.
        </p>
        <div className="d-flex justify-content-evenly">
          <Link to="profile">
            <button className="btn btn-dark">Profile</button>
          </Link>
          <Link to="order">
            <button className="btn btn-dark">Order</button>
          </Link>
        </div>
        <Outlet />
      </section>
    </>
  );
}
