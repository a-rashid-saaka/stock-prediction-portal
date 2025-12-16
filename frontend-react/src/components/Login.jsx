import { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true);

    const userData = {
      username,
      password,
    };
    console.log("userData ==>", userData);

    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/token/",
        userData
      );
      localStorage.setItem("accessToken", response.data.access);
      localStorage.setItem("refreshToken", response.data.refresh);
      console.log("You are logged in");
      setIsLoggedIn(true);
      navigate("/");
    } catch (error) {
      console.error("Invalid credentials");
      setError("Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 bg-light-dark p-5 rounded">
            <h3 className="text-light text-center mb-4">Login</h3>
            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control "
                  placeholder="Username"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                />
              </div>

              <div className="mb-5">
                <input
                  type="password"
                  className="form-control "
                  placeholder="Password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>

              {loading ? (
                <button
                  className="btn btn-info d-block mx-auto "
                  type="submit"
                  disabled
                >
                  <FontAwesomeIcon icon={faSpinner} spin />
                  Logging in...
                </button>
              ) : (
                <button className="btn btn-info d-block mx-auto " type="submit">
                  Login
                </button>
              )}
              {error && <p className="text-danger ">{error}</p>}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
