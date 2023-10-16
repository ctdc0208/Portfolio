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
                            cost-effective device for a specific purpose (smartphones, PC, earphones, etc) 
                            and building my very first cheap potato PC that always need troubleshooting (LOL), 
                            are some experiences that help improve my problem-solving skills.
                        </div>
                        <div>
                            Today, web development interests me. Learning new ways, technologies and implementing 
                            it for eye pleasing designs and making them come to life is what I do!
                        </div>
                    </div>
                    <div className="home-links">
                        <a className="fa fa-github github-button" href="https://github.com/nexus0208" target="_blank" rel="noreferrer"></a>
                        <a className="fa fa-linkedin-square linkedin-button" href="https://www.linkedin.com/in/ctdc0208/" target="_blank" rel="noreferrer"></a>
                    </div>
                </div>
                <div className="skills-container">
                    <div className="dotted-border">
                        <div className="skills-logo react-logo-svg"></div>
                        <div className="skills-name">React</div>
                    </div>
                    <div className="dotted-border">
                        <div className="skills-logo node-logo-svg"></div>
                        <div className="skills-name">Node</div>
                    </div>
                    <div className="dotted-border">
                        <div className="skills-logo html-logo-svg"></div>
                        <div className="skills-name">HTML</div>
                    </div>
                    <div className="dotted-border">
                        <div className="skills-logo css-logo-svg"></div>
                        <div className="skills-name">CSS</div>
                    </div>
                    <div className="dotted-border">
                        <div className="skills-logo js-logo-svg"></div>
                        <div className="skills-name">JavaScript</div>
                    </div>
                    <div className="dotted-border">
                        <div className="skills-logo npm-logo-svg"></div>
                        <div className="skills-name">npm</div>
                    </div>
                    <div className="dotted-border">
                        <div className="skills-logo cplus-logo-svg"></div>
                        <div className="skills-name">C++</div>
                    </div>
                </div>
            </div>
        );
    }
}
