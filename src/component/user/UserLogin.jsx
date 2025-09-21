import { Link } from "react-router";

export default function UserLogin() {
  return (
    <>
      <div className="">
        <div className="row  d-flex justify-content-center align-items-center">
          <div className="col-6 text-center ">
            <div className="card mt-5 ">
              <div className="card-header bg-dark text-success">
                <h1>Login Here</h1>
              </div>
              <div className="card-body bg-warning-subtle">
                <form action="">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-control mb-3"
                    placeholder="enter the name"
                    required
                  />
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="form-control mb-3"
                    placeholder="enter the password"
                  />

                  <div>
                    <input
                      type="submit"
                      value="Login"
                      className="btn btn-md btn-success"
                    />
                  </div>
                </form>
                <p>
                  New User? Register Here :
                  <Link to="/userRegister">Sign Up</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
