import { Component } from "react";

export default class Projects extends Component {
    render() {
        return (
            <div className="projects-bg" id="projects">
            <div className="max-width padding-auto">
                <div className="projects-container">
                    <div className="my-works">
                        My Works
                    </div>
                    <div className="projects-card">
                        <div className="project-screenshot project-screenshot-shopping"></div>
                        <div className="project-info margin-15px">
                            <div className="project-header">
                                <div className="project-name">Shopping Page</div>
                                <div className="project-links">
                                    <a className="view-code-button" href="https://github.com/nexus0208/CV-Application" target="_blank" rel="noreferrer">View Code</a>
                                    <a className="live-preview-button" href="https://ctdc0208.github.io/shopping/" target="_blank" rel="noreferrer">Live Preview</a>
                                </div>
                            </div>
                            <div className="project-description">
                                A Simple Shopping Page created using React JS.
                            </div>
                            <div className="tools-used">
                                <img src="https://img.shields.io/badge/REACT-0d0d1f?style=for-the-badge&logo=REACT&logoColor=%2361DAFB" alt="React" />
                                <img src="https://img.shields.io/badge/REST_API-09b7e7?style=for-the-badge" alt="REST API" />
                                <img src="https://img.shields.io/badge/Webpack-334047?style=for-the-badge&logo=Webpack&logoColor=%238DD6F9" alt="Webpack" />
                            </div>
                        </div>
                    </div>
                    <div className="projects-card">
                        <div className="project-screenshot-opposite-2 project-screenshot-message-board"></div>
                        <div className="project-info-opposite margin-15px">
                            <div className="project-header">
                                <div className="project-name">Mini Message Board</div>
                                <div className="project-links">
                                    <a className="view-code-button" href="https://github.com/ctdc0208/Mini-Message-Board" target="_blank" rel="noreferrer">View Code</a>
                                </div>
                            </div>
                            <div className="project-description"> 
                                A Express JS super simple message board.
                            </div>
                            <div className="tools-used">
                                <img src="https://img.shields.io/badge/node.js-0e4158?style=for-the-badge&logo=node.js&logoColor=%23339933" alt="Node.js" />
                                <img src="https://img.shields.io/badge/Express-6a6a7c?style=for-the-badge&logo=Express&logoColor=%23000000" alt="Express.js" />
                                <img src="https://img.shields.io/badge/MongoDB-082532?style=for-the-badge&logo=MongoDB&logoColor=%2347A248" alt="MongoDB" />
                            </div>
                        </div>
                    </div>
                    <div className="projects-card">
                        <div className="project-screenshot project-screenshot-1"></div>
                        <div className="project-info margin-15px">
                            <div className="project-header">
                                <div className="project-name">CV Application</div>
                                <div className="project-links">
                                    <a className="view-code-button" href="https://github.com/ctdc0208/CV-Application" target="_blank" rel="noreferrer">View Code</a>
                                    <a className="live-preview-button" href="https://ctdc0208.github.io/CV-Application/" target="_blank" rel="noreferrer">Live Preview</a>
                                </div>
                            </div>
                            <div className="project-description">
                            A CV Application designed to help individuals create and manage their professional resumes.
                            </div>
                            <div className="tools-used">
                                <img src="https://img.shields.io/badge/REACT-0d0d1f?style=for-the-badge&logo=REACT&logoColor=%2361DAFB" alt="React" />
                                <img src="https://img.shields.io/badge/Redux-363636?style=for-the-badge&logo=Redux&logoColor=%23764ABC" alt="Redux" />
                            </div>
                        </div>
                    </div>
                    <div className="projects-card">
                        <div className="project-screenshot-opposite-2 project-screenshot-weather"></div>
                        <div className="project-info-opposite margin-15px">
                            <div className="project-header">
                                <div className="project-name">Weather App</div>
                                <div className="project-links">
                                    <a className="view-code-button" href="https://github.com/ctdc0208/Weather-App" target="_blank" rel="noreferrer">View Code</a>
                                    <a className="live-preview-button" href="https://ctdc0208.github.io/Weather-App/" target="_blank" rel="noreferrer">Live Preview</a>
                                </div>
                            </div>
                            <div className="project-description"> 
                                A weather forecast site using the OpenWeatherMap Weather API.
                            </div>
                            <div className="tools-used">
                                <img src="https://img.shields.io/badge/JAVASCRIPT-413d3e?style=for-the-badge&logo=JavaScript&logoColor=%23F7DF1E" alt="JavaScript" />
                                <img src="https://img.shields.io/badge/CSS-3fc0ff?style=for-the-badge&logo=CSS3&logoColor=%231572B6" alt="CSS" />
                                <img src="https://img.shields.io/badge/HTML-c1dcfc?style=for-the-badge&logo=HTML5&logoColor=E34F26" alt="HTML" />
                            </div>
                        </div>
                    </div>
                    <div className="projects-card">
                        <div className="project-screenshot project-screenshot-3"></div>
                        <div className="project-info margin-15px">
                            <div className="project-header">
                                <div className="project-name">DC-Motor Variable Speed</div>
                                <div className="project-links">
                                    <a className="view-code-button" href="https://github.com/ctdc0208/DC-motor-with-variable-speed" target="_blank" rel="noreferrer">View Code</a>
                                </div>
                            </div>
                            <div className="project-description">
                                Designed an Arduino-based speed controller system for precise control of DC motor speeds.
                            </div>
                            <div className="tools-used">
                                <img src="https://img.shields.io/badge/Arduino-00878F?style=for-the-badge&logo=Arduino&logoColor=%23ffffff" alt="Arduino" />
                                <img src="https://img.shields.io/badge/C%2B%2B-272727?style=for-the-badge&logo=C%2B%2B&logoColor=%2300599C" alt="Arduino" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}