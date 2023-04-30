import { Component } from "react";

export default class Header extends Component {
    render() {
        return (
            <div className="max-width padding-auto justify-end header-container">
                <button className="button-header">Home</button>
                <button className="button-header">About</button>
                <button className="button-header">Projects</button>
                <button className="button-header">Contact</button>
            </div>
        );
    }
}