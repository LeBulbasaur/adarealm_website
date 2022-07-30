import "../../styles/auth.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
export default function Login() {
  const { loginUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(undefined);
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const submitForm = async (e) => {
    e.preventDefault();
    setLoading(true);
    const loginResult = await loginUser(credentials);
    setLoading(false);
    setResult(loginResult);
    if (loginResult.success) window.location.href = "/";
  };

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div>
        <Navbar />
        <div className="auth__container">
          <form onSubmit={submitForm} className="auth__form">
            <h1>Login</h1>

            <div className="auth__inputs">
              {result ? (
                <div
                  className={"authBox"}
                  style={{
                    color: result.success ? "#86C232" : "rgba(255,0,0,0.7)",
                  }}
                >
                  {result.msg}
                </div>
              ) : null}
              <input
                onChange={handleChange}
                name="email"
                type="email"
                placeholder="Email"
                value={credentials.email}
                required
                className="auth__input"
              />
              <input
                onChange={handleChange}
                type="password"
                name="password"
                placeholder="Password"
                value={credentials.password}
                minLength={8}
                required
                className="auth__input"
              />
            </div>

            <div>
              <p>
                Forgot password? <a href="/forgot-password">Recover</a>
              </p>
              <button type="submit" className="learn__button">
                Login
              </button>
            </div>
            <p>
              Don't have an account? <a href="/register">Register now!</a>
            </p>
          </form>
        </div>
        <div></div>
        <Footer />
      </div>

      {/*}     {loading ? <Loading /> : null}*/}
    </>
  );
}
