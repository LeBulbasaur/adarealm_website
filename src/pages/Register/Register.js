import "./register.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import Loading from "../../components/loading/Loading";

export default function Register() {
  const { createUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(undefined);
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    repeatedPassword: "",
  });

  const submitForm = async (e) => {
    e.preventDefault();
    if (credentials.repeatedPassword !== credentials.password) {
      setResult({
        success: false,
        msg: "Paswords must be the same!",
      });
      return;
    }
    setLoading(true);
    const registerResult = await createUser(credentials);
    setLoading(false);
    setResult(registerResult);
    if (registerResult.success)
      setTimeout(() => (window.location.href = "/"), 1000);
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
            <h1>Register</h1>

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
                required
                minLength={8}
                className="auth__input"
              />
              <input
                onChange={handleChange}
                type="password"
                name="repeatedPassword"
                placeholder="Repeat Password"
                value={credentials.repeatedPassword}
                required
                minLength={8}
                className="auth__input"
              />
            </div>

            <div>
              <p>
                Forgot password? <a href="/forgot-password">Recover</a>
              </p>
              <button type="submit" className="learn__button">
                Sign up
              </button>
            </div>
            <p>
              Already have an account? <a href="/login">Login!</a>
            </p>
          </form>
        </div>
        <div></div>
        <Footer />
      </div>

      {loading ? <Loading /> : null}
    </>
  );
}
