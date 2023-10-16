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
                    <div className="projects-card project-1">
                        <div className="project-screenshot project-screenshot-1"></div>
                        <div className="project-info margin-15px">
                            <div className="project-header">
                                <div className="project-name">CV Application</div>
                                <div className="project-links">
                                    <a className="view-code-button" href="https://github.com/nexus0208/CV-Application" target="_blank" rel="noreferrer">View Code</a>
                                    <a className="live-preview-button" href="https://nexus0208.github.io/CV-Application/" target="_blank" rel="noreferrer">Live Preview</a>
                                </div>
                            </div>
                            <div className="project-description">
                            A CV Application designed to help individuals create and manage their professional resumes.                            </div>
                        </div>
                    </div>
                    <div className="projects-card project-2">
                        <div className="project-screenshot-opposite-2"></div>
                        <div className="project-info-opposite margin-15px">
                            <div className="project-header">
                                <div className="project-name">Weather App</div>
                                <div className="project-links">
                                    <a className="view-code-button" href="https://github.com/nexus0208/Weather-App" target="_blank" rel="noreferrer">View Code</a>
                                    <a className="live-preview-button" href="https://nexus0208.github.io/Weather-App/" target="_blank" rel="noreferrer">Live Preview</a>
                                </div>
                            </div>
                            <div className="project-description"> 
                                A weather forecast site using the OpenWeatherMap Weather API.
                            </div>
                        </div>
                    </div>
                    <div className="projects-card project-3">
                        <div className="project-screenshot project-screenshot-3"></div>
                        <div className="project-info margin-15px">
                            <div className="project-header">
                                <div className="project-name">DC-Motor Variable Speed</div>
                                <div className="project-links">
                                    <a className="view-code-button" href="https://github.com/nexus0208/DC-motor-with-variable-speed" target="_blank" rel="noreferrer">View Code</a>
                                </div>
                            </div>
                            <div className="project-description">
                            Designed an Arduino-based speed controller system for precise control of DC motor speeds.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}