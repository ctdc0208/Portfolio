import { Component } from "react";
import { Link } from "react-scroll";

export default class Navbar extends Component {
    render() {
        return (
          <div className="header-container side-bar">
            <div className="header-button-container sticky top-30">
              {/* <Link activeClass="active" to="home" spy={true} smooth={true} offset={-250} duration={500}>
                <button className="button-header" >Home</button>
              </Link> */}
              <Link activeClass="active" to="about" spy={true} smooth={true} offset={-225} duration={500}>
                <button className="button-header">About</button>
              </Link>
              <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-120} duration={500}>
                <button className="button-header">Projects</button>
              </Link>
              <Link activeClass="active" to="contact" spy={true} smooth={true} offset={0} duration={500}>
                <button className="button-header">Contact</button>
              </Link>
            </div>
          </div>
        );
    }
}