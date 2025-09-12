import { Link } from "react-router";

export default function UserRegister() {
  return (
    <>
      <div className="">
        <div className="row  d-flex justify-content-center align-items-center">
          <div className="col-6 mt-5 text-center ">
            <div className="card text-center">
              <div className="card-header bg-dark text-success">
                <h1>Register Here</h1>
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
                    type="text"
                    name=""
                    id=""
                    className="form-control mb-3"
                    placeholder="enter the email"
                  />
                  <input
                    type="password"
                    name=""
                    id=""
                    className="form-control mb-3"
                    placeholder="enter the password"
                  />
                  <input
                    type="password"
                    name=""
                    id=""
                    className="form-control mb-3"
                    placeholder="re-enter password"
                  />
                  <div>
                    <input
                      type="submit"
                      value="Register"
                      className="btn btn-md btn-success"
                    />
                  </div>
                </form>
                <p>
                  Already Have an Account? Login Here :
                  <Link to="/userLogin">LogIn</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
