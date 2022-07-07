import "./team.css"
import "animate.css"
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import Member from "./Member"
import data from "../../data/members.json"

export default function Team() {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });

    const MembersArray = data.members.map((member, id) => {
        return (
            <Member
                key={id}
                name={member.name}
                description={member.description}
                links={member.links ? member.links : null}
            />
        )
    })

    return (
        <div>
            <Navbar />
            <div className="team__container">
                <div className="team__content">
                    <div className="team__header animate__animated animate__fadeInLeft">
                        <h2>Meet our team</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam ipsum sit amet blandit volutpat. Aliquam id erat ac massa suscipit interdum in sit amet ipsum. Phasellus imperdiet ligula vitae risus rutrum laoreet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis, justo id sollicitudin finibus, sem tortor feugiat mi, a auctor ante enim eget eros.</p>
                    </div>
                    <div className="team__members__container animate__animated animate__fadeInRight">
                        {MembersArray}
                    </div>
                    <div className="team__values__container">
                        <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInLeft">
                            <h2>Our Values</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam ipsum sit amet blandit volutpat. Aliquam id erat ac massa suscipit interdum in sit amet ipsum. Phasellus imperdiet ligula vitae risus rutrum laoreet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis, justo id sollicitudin finibus, sem tortor feugiat mi, a auctor ante enim eget eros.</p>
                        </AnimationOnScroll>
                        <div className="team__values">
                            <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInLeft">
                                <div className="team__value">
                                    <h3>Value <span style={{ color: "#85B6FF" }}>#1</span></h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam ipsum sit amet blandit volutpat.</p>
                                </div>
                            </AnimationOnScroll>
                            <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp">
                                <div className="team__value">
                                    <h3>Value <span style={{ color: "#85B6FF" }}>#2</span></h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam ipsum sit amet blandit volutpat.</p>
                                </div>
                            </AnimationOnScroll>
                            <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInRight">
                                <div className="team__value">
                                    <h3>Value <span style={{ color: "#85B6FF" }}>#3</span></h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam ipsum sit amet blandit volutpat.</p>
                                </div>
                            </AnimationOnScroll>
                        </div>
                    </div>
                    <AnimationOnScroll animateOnce={true} animateIn="animate__fadeIn">
                        <div className="team__collabs">
                            <h2>Interested in Collaboration?</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam ipsum sit amet blandit volutpat. Aliquam id erat ac massa suscipit interdum in sit amet ipsum. Phasellus imperdiet ligula vitae risus rutrum laoreet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis, justo id sollicitudin finibus, sem tortor feugiat mi, a auctor ante enim eget eros.
                                <br />
                                <br />
                                Duis pharetra dui sit amet diam auctor vestibulum. Integer malesuada ipsum id ex lobortis maximus. Aliquam consectetur sem odio, eu tempus eros imperdiet ac. Integer sodales tristique massa sit amet pellentesque. Quisque condimentum dui vel pulvinar laoreet. Mauris dictum consectetur ipsum, sed ultrices tellus tristique vel. Aliquam eget est malesuada, accumsan massa sed, maximus nibh. Morbi ac nisi porta, malesuada velit et, venenatis.
                            </p>
                        </div>
                    </AnimationOnScroll>
                </div>
            </div>
            <Footer />
        </div >
    )
}