import Collection from "../../components/Collection";
import Header from "../../components/Header";
import Roadmap from "../../components/Roadmap";
import Faq from "../../components/Faq";
import './style.css';
import Team from "../../components/Team";
import Footer from "../../components/Footer";

function Projects() {
    return (
        <div>
            <Header />
            <Collection />
            <Roadmap />
            <Faq />
            <Team />
            <Footer />
        </div>
    );
};

export default Projects;

