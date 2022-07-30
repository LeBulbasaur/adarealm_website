import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import "../../styles/auth.css";
import Footer from "../../components/footer/Footer";
import { useAuth } from "../../contexts/AuthContext";
import Loading from "../../components/loading/Loading";

function ForgotPassword() {
  const { sendRecoveryEmail } = useAuth();
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(undefined);
  const [credentials, setCredentials] = useState({
    email: "",
  });

  const submitForm = async (e) => {
    e.preventDefault();
    setLoading(true);
    const recoveryResult = await sendRecoveryEmail(credentials.email);
    setLoading(false);
    if (recoveryResult !== false) {
      console.log("1");
      setResult({
        success: true,
        msg: "Recovery mail has been sent!",
      });
    } else {
      setResult({
        success: false,
        msg: "Something went wrong",
      });
    }
    // setResult(recoveryResult);
    console.log(recoveryResult);
    // if (loginResult.success) window.location.href = "/";
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
        <div>
          <Navbar />
          <div className="auth__container">
            <form className="auth__form" onSubmit={submitForm}>
              <h1>Password Recovery</h1>
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
              </div>

              <div>
                <button
                  type="submit"
                  className="learn__button"
                  style={{ width: "unset", marginTop: "1rem" }}
                >
                  Send recovery email
                </button>
              </div>
            </form>
          </div>
          <div></div>
        </div>
        <Footer />
        {loading ? <Loading /> : null}
      </div>
    </>
  );
}

export default ForgotPassword;
