import { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const [loading, setLoading] = useState(false);

  const handleRegistration = async (event) => {
    event.preventDefault();
    setLoading(true);

    const userData = {
      username,
      email,
      password,
    };
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/register/",
        userData
      );
      console.log("response.data==>", response.data);
      console.log("Registration Successful");
      setErrors({});
      setSuccess(true);
    } catch (error) {
      setErrors(error.response.data);
      console.error("Registration error", error.response.data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 bg-light-dark p-5 rounded">
            <h3 className="text-light text-center mb-4">Create an account</h3>
            <form onSubmit={handleRegistration}>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control "
                  placeholder="Username"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                />
                <small>
                  {errors.username && (
                    <p className="text-danger">{errors.username}</p>
                  )}
                </small>
              </div>

              <div className="mb-3">
                <input
                  type="email"
                  className="form-control "
                  placeholder="Email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>

              <div className="mb-5">
                <input
                  type="password"
                  className="form-control "
                  placeholder="Set Password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
                <small>
                  {errors.password && (
                    <p className="text-danger">{errors.password}</p>
                  )}
                </small>
              </div>

              {success && (
                <p className="alert alert-success">Registration successful</p>
              )}

              {success &&
                setTimeout(() => {
                  setSuccess(false);
                }, 2000)}

              {loading ? (
                <button
                  className="btn btn-info d-block mx-auto "
                  type="submit"
                  disabled
                >
                  <FontAwesomeIcon icon={faSpinner} spin />
                  Please wait...
                </button>
              ) : (
                <button className="btn btn-info d-block mx-auto " type="submit">
                  Signup
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
