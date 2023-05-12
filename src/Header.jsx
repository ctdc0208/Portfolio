import { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";

export default class Header extends Component {
    render() {
        return (
            <div className="header-container">
            <div className="max-width padding-auto justify-end">
              <Link to="#home" smooth>
                <button className="button-header">Home</button>
              </Link>
              <Link to="#about">
                <button className="button-header">About</button>
              </Link>
              <Link to="#projects">
                <button className="button-header">Projects</button>
              </Link>
              <Link to="#contact">
                <button className="button-header">Contact</button>
              </Link>
            </div>
        </div>
        );
    }
}