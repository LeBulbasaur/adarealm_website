import "./team.css";
import "animate.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Member from "./Member";
import data from "../../data/members.json";

export default function Team() {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });

  const MembersArray = data.members.map((member, id) => {
    return (
      <Member
        key={id}
        name={member.name}
        description={member.description}
        links={member.links ? member.links : null}
      />
    );
  });

  return (
    <div>
      <Navbar />
      <div className="team__container">
        <div className="team__content">
          <div className="team__header animate__animated animate__fadeInLeft">
            <h2>Meet our team</h2>
            {/*<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam ipsum sit amet blandit volutpat. Aliquam id erat ac massa suscipit interdum in sit amet ipsum. Phasellus imperdiet ligula vitae risus rutrum laoreet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis, justo id sollicitudin finibus, sem tortor feugiat mi, a auctor ante enim eget eros.</p>*/}
          </div>
          <div className="team__members__container animate__animated animate__fadeInRight">
            {MembersArray}
          </div>
          {/*} <div className="team__values__container">
            <AnimationOnScroll
              animateOnce={true}
              animateIn="animate__fadeInLeft"
            >
              <h2>Our Values</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                aliquam ipsum sit amet blandit volutpat. Aliquam id erat ac
                massa suscipit interdum in sit amet ipsum. Phasellus imperdiet
                ligula vitae risus rutrum laoreet. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Vivamus venenatis, justo id
                sollicitudin finibus, sem tortor feugiat mi, a auctor ante enim
                eget eros.
              </p>
            </AnimationOnScroll>
            <div className="team__values">
              <AnimationOnScroll
                animateOnce={true}
                animateIn="animate__fadeInLeft"
              >
                <div className="team__value">
                  <h3>
                    Value <span style={{ color: "#85B6FF" }}>#1</span>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec aliquam ipsum sit amet blandit volutpat.
                  </p>
                </div>
              </AnimationOnScroll>
              <AnimationOnScroll
                animateOnce={true}
                animateIn="animate__fadeInUp"
              >
                <div className="team__value">
                  <h3>
                    Value <span style={{ color: "#85B6FF" }}>#2</span>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec aliquam ipsum sit amet blandit volutpat.
                  </p>
                </div>
              </AnimationOnScroll>
              <AnimationOnScroll
                animateOnce={true}
                animateIn="animate__fadeInRight"
              >
                <div className="team__value">
                  <h3>
                    Value <span style={{ color: "#85B6FF" }}>#3</span>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec aliquam ipsum sit amet blandit volutpat.
                  </p>
                </div>
              </AnimationOnScroll>
            </div>
  </div> */}
          <AnimationOnScroll animateOnce={true} animateIn="animate__fadeIn">
            <div className="team__collabs">
              <h2>Interested in joining the team?</h2>
              <p>
                <h5>
                  {" "}
                  Send us a message:{" "}
                  <a href="mailto:hello@adarealm.io">hello@adarealm.io</a>
                </h5>
                If you are interested in becoming a moderator or support with
                developments, please show your interested by writing a small
                description of your skills to the email below.
              </p>
            </div>
          </AnimationOnScroll>
        </div>
      </div>
      <Footer />
    </div>
  );
}
