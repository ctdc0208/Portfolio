import { Component } from "react";

export default class Contact extends Component {
    render() {
        return (
            <div className="background-black">
                <div className="contact-container">
                    <div className="contact-me">Contact</div>
                    <div className="contact-info">
                        <div>I am currently looking for an oppurtunity, please feel free to send a message if you think our work could be mutually beneficial!</div>
                        <div>Email Address</div>
                        <div>
                        <button className="fa fa-github github-button"></button>
                        <button className="fa fa-linkedin-square linkedin-button" aria-hidden="true"></button>
                        </div>
                    </div>
                    <div className="contact-img">
                    </div>
                </div>
            </div>
        )
    }
}