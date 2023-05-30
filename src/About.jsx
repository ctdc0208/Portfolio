import { Component } from "react";

export default class About extends Component {
    render() {
        return (
            <div className="max-width about-container" id="about">
                <div className="profile-bibliography">
                    <div className="home-about-me">About me</div>
                    <div className="home-bibliography">
                        <div>
                            Hi there! I&apos;m Christian, a web dev.
                        </div>
                        <div>
                            Growing up, I am fascinated by everything tech related, searching the most 
                            cost-effective device for a specific purpose(smartphones, PC, earphones, etc) 
                            and building my very first cheap potato PC that always need troubleshooting (LOL), 
                            are some experiences that help improve my problem-solving skills.
                        </div>
                        <div>
                            Today, web development interest me. Learning new ways, technologies and implementing 
                            it for eye pleasing designs and making them come to life is what I do!
                        </div>
                    </div>
                    <div className="home-links margin-15px">
                        <button className="fa fa-github github-button"></button>
                        <button className="fa fa-linkedin-square linkedin-button" aria-hidden="true"></button>
                </div>
                </div>
            </div>
        );
    }
}
