export default function Order() {
  return (
    <>
      <section className="container-fluid">
        <div className="row mt-3">
          <div className="col-6 m-auto">
            <div className="card text-center">
              <div className="card-header bg-black text-warning">
                <h2>Your Orders</h2>
              </div>
              <div className="card-body">
                <ul className="list-group">
                  <li className="list-group-item">Order 1 : Mobile</li>
                  <li className="list-group-item">Order 1 : Laptop</li>
                  <li className="list-group-item">Order 1 : Watch</li>
                  <li className="list-group-item">Order 1 : Shoes</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
