import "./collaboration.css"
import "animate.css/animate.min.css";
import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import CollabElement from "./CollabElement"

export default function Collaboration() {
    return (
        <div>
            <Navbar />
            <div className="collaboration__container">
                <div className="collaboration__content">
                    <div className="collaboration__header animate__animated animate__fadeInDown">
                        <h2>Meet our collaborators</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam ipsum sit amet blandit volutpat. Aliquam id erat ac massa suscipit interdum in sit amet ipsum. Phasellus imperdiet ligula vitae risus rutrum laoreet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis, justo id sollicitudin finibus, sem tortor feugiat mi, a auctor ante enim eget eros.
                        </p>
                    </div>
                    <div className="collaboration__list animate__animated animate__fadeInUp">
                        <CollabElement
                            name="Sperek Company"
                            description="Short description of the collaborator. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam ipsum sit amet blandit volutpat. Aliquam id erat ac massa suscipit interdum in sit amet ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis, justo id sollicitudin finibus, sem tortor feugiat mi, a auctor ante enim eget eros."
                        />
                        <CollabElement
                            name="Google Inc."
                            description="Short description of the collaborator. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam ipsum sit amet blandit volutpat. Aliquam id erat ac massa suscipit interdum in sit amet ipsum. Phasellus imperdiet ligula vitae risus rutrum laoreet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis, justo id sollicitudin finibus, sem tortor feugiat mi, a auctor ante enim eget eros."
                        />
                        <CollabElement
                            name="Steam"
                            description="Short description of the collaborator. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam ipsum sit amet blandit volutpat. Aliquam id erat ac massa suscipit interdum in sit amet ipsum. Phasellus imperdiet ligula vitae risus rutrum laoreet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis, justo id sollicitudin finibus, sem tortor feugiat mi, a auctor ante enim eget eros."
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}