import { Link } from "react-router-dom";
import { FaQuestionCircle, FaTicketAlt} from "react-icons/fa";
import { FaCirclePlay } from "react-icons/fa6";
import { GiProgression } from "react-icons/gi";
import Header from "../components/Header";

function Home() {
    return(
        <>
        <Header/>
            <section className="heading">
                <h1>Welcome to FlashCards</h1>
                <p>Memory is the mother of Imagination</p>
            </section>
            <Link to='/newSet' className="btn btn-reverse btn-block">
                <FaQuestionCircle /> Create New Set
            </Link>
            <Link to='/sets' className="btn btn-block">
                <FaTicketAlt /> View My Sets
            </Link>
            <Link to='/tickets' className="btn btn-block">
                <FaCirclePlay  /> Start Memorising
            </Link>
            <Link to='/tickets' className="btn btn-block">
                <GiProgression /> Track Progress
            </Link>
        </>
    )
}

export default Home;