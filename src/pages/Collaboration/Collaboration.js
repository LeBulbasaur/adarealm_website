import "./collaboration.css";
import "animate.css/animate.min.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import CollabElement from "./CollabElement";
import lazyLlamasPhoto from "../../assets/lazyLLamasPhoto.png";
import glusLogo from "../../assets/glusLogo.jpg";
export default function Collaboration() {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });

  return (
    <div>
      <Navbar />
      <div className="collaboration__container">
        <div className="collaboration__content">
          <div className="collaboration__header animate__animated animate__fadeInDown">
            <h2>Meet our collaborators</h2>
            {/*<p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              aliquam ipsum sit amet blandit volutpat. Aliquam id erat ac massa
              suscipit interdum in sit amet ipsum. Phasellus imperdiet ligula
              vitae risus rutrum laoreet. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Vivamus venenatis, justo id
              sollicitudin finibus, sem tortor feugiat mi, a auctor ante enim
              eget eros.
            </p>*/}
          </div>
          <div className="collaboration__list animate__animated animate__fadeInUp">
            <CollabElement
              twitter="https://twitter.com/LazyLlamasCNFT"
              discord="https://discord.gg/wy7KffEsmD"
              photo={lazyLlamasPhoto}
              link="https://www.lazyllamas.io/"
              name="Lazy LLamas (Lazy Island)"
              description="Created as a collaboration project between Lazy Llamas x Ada Realm. Lazy Island will be the official metaverse for Lazy Llama holders. The Llamas community is really strong and are growing. Lazy Island has been planned with features like guiding your own 3D llama avatar through Lazy Island and hosting tons of events for the Lazy Llama community. They have also been working on the Lazy Island Takeover project and have tons of exciting stuff coming up too with Ada Realm."
            />
            <CollabElement
              discord="https://discord.com/invite/GjE9zcTg2V"
              twitter="https://twitter.com/cryptodelicsnft"
              photo={glusLogo}
              link="https://www.glus.io/"
              name="Glus (Cryptodelics Realm)"
              description="Glus is one of the first creators on the Cardano Blockchain, releasing NFTs since April 2021. He is an Italian cognitive sciences researcher and multimedia artist exploring multiple art mediums within different sensorial dimensions. From Paper Collages (The Mind of Glus) to Motion Design (Cryptodelics - Collabs), passing by musical experimentations, the main artistic research is focused on bringing harmony between the abstract, surreal and psychedelic dimensions of my perceptual reality. Glus created Cryptodelics Realm , a collaboration masterpiece between Glus x Ada Realm."
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
