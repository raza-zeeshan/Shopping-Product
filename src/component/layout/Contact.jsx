export default function Contact() {
  return (
    <>
      <div className="container-fluid">
        <div className="row mt-3">
          <div className="col-8 m-auto text-center">
            <div className="card">
              <div className="card-header bg-dark text-success">
                <h1>contact Us</h1>
              </div>
              <div className="card-body bg-success-subtle">
                <form action="">
                  <input
                    type="text"
                    name=""
                    id=""
                    className="form-control mb-3"
                    placeholder="enter the name"
                  />
                  <input
                    type="email"
                    name=""
                    id=""
                    className="form-control mb-3"
                    placeholder="enter the email"
                  />
                  <textarea
                    type="text"
                    name=""
                    id=""
                    height={"500px"}
                    className="form-control mb-3"
                    placeholder="write your message here"
                  />
                  <div>
                    <input
                      type="submit"
                      className="btn btn-md btn-success text-black"
                    />
                  </div>
                </form>
                <p>
                  Our mission is to provide the best service possible. We are
                  dedicated to ensuring customer satisfaction and delivering
                  quality products.
                </p>
                <p>
                  Our team is composed of experienced professionals who are
                  passionate about their work and committed to excellence.
                </p>
                <div className="w-50 m-auto">
                  <ul className="list-group">
                    <li className="list-group-item">Name : Zeeshan Raza</li>
                    <li className="list-group-item">Role : Developer</li>
                    <li className="list-group-item">
                      Email : zeeshanraza0201@gmail.com
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
