import "./policy.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import logo from "../../assets/logo__original.png";

export default function Policy() {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });

  return (
    <div>
      <Navbar />
      <div className="policy__container">
        <div className="policy__content">
          <h2>Policy ID</h2>
          <div className="policy__content__box">
            <div className="policy__text">
              <h4>Ada Realm Plot Landsale 1</h4>
              <p>b5240b3ae40bca2cc56b0fdfd7553724ccd18c56a98937d6b6f76265</p>

              <h4>Lazy Island / Ada Realm Collab</h4>
              <p>55daa23e0e243bb4dda613c9d06a78da955f26160b13320999f912e2</p>
              <h4>Cryptodelics / Ada Realm Collab</h4>
              <p>a9714f0cf102ce365bcdbe921ed001135bbc6a8420a01463d45da405</p>
              <h4>Ada Realm Skins</h4>
              <p>803cc495431e2127c697b14bc95d3485db8b763fc35aa759fa73ecad</p>
            </div>
          </div>
        </div>
        <div className="policy__content">
          <h2>Marketplace Links</h2>
          <div className="policy__content__box">
            <div className="policy__text">
              <h4>
                Meet Ada Realm on jpg.store{" "}
                <a
                  href="https://www.jpg.store/collection/adarealm"
                  style={{ textDecoration: "underline" }}
                >
                  here
                </a>
              </h4>

              <h4>
                Meet Ada Realm on cnft.io{" "}
                <a
                  href="https://cnft.io/project/ada-realm"
                  style={{ textDecoration: "underline" }}
                >
                  here
                </a>
              </h4>

              <h4>
                Meet Ada Realm on cnft.io{" "}
                <a
                  href="https://cnft.io/project/ada-realm"
                  style={{ textDecoration: "underline" }}
                >
                  here
                </a>
              </h4>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
