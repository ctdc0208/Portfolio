import { Component } from "react";

export default class About extends Component {
    render() {
        return (
            <div className="max-width about-grid">
                <div className="profile-photo"></div>
                <div className="profile-bibliography">
                    <div className="home-about-me margin-15px">About me</div>
                    <div className="home-bibliography margin-15px">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus voluptates inventore iste omnis modi, perferendis tempora assumenda, est dignissimos quo nobis at, unde culpa eius beatae eaque molestiae vitae perspiciatis.</div>
                    <div className="home-links margin-15px">
                        <button>Github</button>
                        <button>Linked In</button>
                </div>
                </div>
            </div>
        );
    }
}
