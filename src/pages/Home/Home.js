import "./home.css";
import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/hero/Hero";
import Roadmap from "../../components/roadmap/Roadmap";
import About from "../../components/about/About";
import News from "../../components/news/News";
import Info from "../../components/info/Info";
import Footer from "../../components/footer/Footer";
import { useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { getAuth } from "firebase/auth";

export default function Home() {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
  const { firebaseUser } = useAuth();
  useEffect(() => {
    async function main() {
      const auth = getAuth();

      if (!auth.currentUser) return;

      const authtoken = await auth.currentUser.getIdToken(true);
      console.log(authtoken);
      fetch("http://localhost:4000/images", {
        headers: {
          authtoken,
        },
      }).then((d) => console.log(d));
    }
    main();
  }, [firebaseUser]);

  return (
    <div>
      <Navbar />
      <div className="app__content">
        <Hero />
        <Roadmap />
        <About />
        <News />
        <Info />
      </div>
      <Footer />
    </div>
  );
}
