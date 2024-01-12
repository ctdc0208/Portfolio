import { Link } from "react-scroll";


export default function Header() {
    return (
        <div className="sticky-header">
            <div className="header-container box-shadow">
                <div className="header-name font-700">Christian.dev</div>
                <div className="button-header-container">
                    <Link activeClass="active" className="button-header .font-400" to="home" spy={true} smooth={true} offset={-250} duration={500}>
                        Home
                    </Link>
                    <Link activeClass="active" className="button-header .font-400" to="about" spy={true} smooth={true} offset={-225} duration={500}>
                        About
                    </Link>
                    <Link activeClass="active" className="button-header .font-400" to="projects" spy={true} smooth={true} offset={-120} duration={500}>
                        Project
                    </Link>
                    <Link activeClass="active" className="button-header .font-400" to="contact" spy={true} smooth={true} offset={0} duration={500}>
                        Contact
                    </Link>
                </div>
            </div>
        </div>
    )
}