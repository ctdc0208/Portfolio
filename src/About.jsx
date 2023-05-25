import { Component } from "react";

export default class About extends Component {
    render() {
        return (
            <div className="max-width about-grid" id="about">
                <img  src="https://images.pexels.com/photos/4709285/pexels-photo-4709285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Profile Photo" className="profile-photo"></img>
                <div className="profile-bibliography">
                    <div className="home-about-me margin-15px">About me</div>
                    <div className="home-bibliography margin-15px">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus voluptates inventore iste omnis modi, perferendis tempora assumenda, est dignissimos quo nobis at, unde culpa eius beatae eaque molestiae vitae perspiciatis.</div>
                    <div className="home-links margin-15px">
                        <button className="fa fa-github github-button"></button>
                        <button className="fa fa-linkedin-square linkedin-button" aria-hidden="true"></button>
                </div>
                </div>
            </div>
        );
    }
}
