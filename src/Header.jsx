import { Component } from "react";
import { Link } from "react-scroll";

export default class Header extends Component {
    render() {
        return (
            <div className="header-container">
            <div className="max-width padding-auto justify-end">
              <Link to="home" spy={true} smooth={true}  duration={500}>
                <button className="button-header" >Home</button>
              </Link>
              <Link to="about" smooth={true} offset={-75} duration={500}>
                <button className="button-header">About</button>
              </Link>
              <Link to="projects" spy={true} smooth={true} offset={-75} duration={500}>
                <button className="button-header">Projects</button>
              </Link>
              <Link to="contact" spy={true} smooth={true}  duration={500}>
                <button className="button-header">Contact</button>
              </Link>
            </div>
        </div>
        );
    }
}