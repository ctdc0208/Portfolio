import { Component } from "react";

export default class Header extends Component {
    render() {
        return (
            <div className="max-width margin-auto padding-auto justify-end header-container">
                <button>Home</button>
                <button>About</button>
                <button>Projects</button>
                <button>Contact</button>
            </div>
        );
    }
}