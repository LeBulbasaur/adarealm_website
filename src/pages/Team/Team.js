import "./team.css"
import "animate.css"
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import Member from "./Member"

export default function Team() {
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
                        <Member
                            name="Coldfusion"
                            description="My first dip into Crypto started over 3years ago in the BSC space, this was a fantastic learning curve for me. Having experienced many aspects such as being involved in building a community, creating sustainable tokanomics and working within a team to launch a number of successful projects. My favourite role has always been my involvement with the community and networking with like minded projects. This mindset of community first brought me into the Cardano space - a space where innovation is at the forefront of development."
                            links={{
                                twitter: "https://twitter.com/denpa_666/status/1540620381995732992?s=20&t=qUwUmyFtrADdGWSmNj-NHg",
                                linkedin: "https://twitter.com/denpa_666/status/1540620381995732992?s=20&t=qUwUmyFtrADdGWSmNj-NHg",
                                facebook: "https://twitter.com/denpa_666/status/1540620381995732992?s=20&t=qUwUmyFtrADdGWSmNj-NHg"
                            }}
                        />
                        <Member
                            name="THE GOOD THE BAD AND THE UGLY"
                            description="Early 30’s crypto enthusiast. Started in BnB Meme sector and after countless rugs ended up in the Cardano space.  Strong believer of ADA in general. But really like (C)NFT’s and most off all the communities behind them. We’re still early altough one day in crypto feels like an week."
                            links={{
                                twitter: "https://twitter.com/denpa_666/status/1540620381995732992?s=20&t=qUwUmyFtrADdGWSmNj-NHg",
                                linkedin: "https://twitter.com/denpa_666/status/1540620381995732992?s=20&t=qUwUmyFtrADdGWSmNj-NHg",
                                facebook: "https://twitter.com/denpa_666/status/1540620381995732992?s=20&t=qUwUmyFtrADdGWSmNj-NHg"
                            }}
                        />
                        <Member
                            name="Coldfusion"
                            description="My first dip into Crypto started over 3years ago in the BSC space, this was a fantastic learning curve for me. Having experienced many aspects such as being involved in building a community, creating sustainable tokanomics and working within a team to launch a number of successful projects. My favourite role has always been my involvement with the community and networking with like minded projects. This mindset of community first brought me into the Cardano space - a space where innovation is at the forefront of development."
                            links={{
                                twitter: "https://twitter.com/denpa_666/status/1540620381995732992?s=20&t=qUwUmyFtrADdGWSmNj-NHg",
                                linkedin: "https://twitter.com/denpa_666/status/1540620381995732992?s=20&t=qUwUmyFtrADdGWSmNj-NHg",
                                facebook: "https://twitter.com/denpa_666/status/1540620381995732992?s=20&t=qUwUmyFtrADdGWSmNj-NHg"
                            }}
                        />
                        <Member
                            name="Coldfusion"
                            description="My first dip into Crypto started over 3years ago in the BSC space, this was a fantastic learning curve for me. Having experienced many aspects such as being involved in building a community, creating sustainable tokanomics and working within a team to launch a number of successful projects. My favourite role has always been my involvement with the community and networking with like minded projects. This mindset of community first brought me into the Cardano space - a space where innovation is at the forefront of development."
                        />
                        <Member
                            name="Coldfusion"
                            description="My first dip into Crypto started over 3years ago in the BSC space, this was a fantastic learning curve for me. Having experienced many aspects such as being involved in building a community, creating sustainable tokanomics and working within a team to launch a number of successful projects. My favourite role has always been my involvement with the community and networking with like minded projects. This mindset of community first brought me into the Cardano space - a space where innovation is at the forefront of development."
                        />
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