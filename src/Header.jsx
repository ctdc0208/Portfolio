import { Component } from "react";
import { Link } from "react-scroll";

export default class Header extends Component {
    render() {
        return (
            <div className="header-container">
            <div className="max-width padding-auto header-button-container">
              <Link activeClass="active" to="home" spy={true} smooth={true} offset={-250} duration={500}>
                <button className="button-header" >Home</button>
              </Link>
              <Link activeClass="active" to="about" spy={true} smooth={true} offset={-125} duration={500}>
                <button className="button-header">About</button>
              </Link>
              <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-120} duration={500}>
                <button className="button-header">Projects</button>
              </Link>
              <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-200} duration={500}>
                <button className="button-header">Contact</button>
              </Link>
            </div>
        </div>
        );
    }
}