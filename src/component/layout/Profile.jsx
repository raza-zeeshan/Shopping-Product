export default function Profile() {
  return (
    <>
      <section className="container-fluid">
        <div className="row mt-3">
          <div className="col-6 m-auto">
            <div className="card text-center">
              <div className="card-header bg-black text-warning">
                <h2>Personal Details</h2>
              </div>
              <div className="card-body">
                <ul className="list-group">
                  <li className="list-group-item">Username : Zeeshan Raza</li>
                  <li className="list-group-item">Phone: 7044349224</li>
                  <li className="list-group-item">Address : Kolkata</li>
                  <li className="list-group-item">
                    Email :zeeshanraza0201@gmail.com
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
