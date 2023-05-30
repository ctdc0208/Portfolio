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
                        <div className="project-screenshot">Screenshot of Project</div>
                        <div className="project-info margin-15px">
                            <div className="project-header">
                                <div className="project-name">CV Application</div>
                                <div className="project-links">
                                    <button>View Code</button>
                                     <button>Live Preview</button>
                                </div>
                            </div>
                            <div className="project-description">
                                Short description of the project. Just a couple sentences will do
                            </div>
                        </div>
                    </div>
                    <div className="projects-card project-2">
                        <div className="project-screenshot-opposite">Screenshot of Project</div>
                        <div className="project-info-opposite margin-15px">
                            <div className="project-header">
                                <div className="project-name">Project Two</div>
                                <div className="project-links">
                                    <button>View Code</button>
                                     <button>Live Preview</button>
                                </div>
                            </div>
                            <div className="project-description">
                                Short description of the project. Just a couple sentences will do
                            </div>
                        </div>
                    </div>
                    <div className="projects-card project-3">
                        <div className="project-screenshot">Screenshot of Project</div>
                        <div className="project-info margin-15px">
                            <div className="project-header">
                                <div className="project-name">Project Three</div>
                                <div className="project-links">
                                    <button>View Code</button>
                                     <button>Live Preview</button>
                                </div>
                            </div>
                            <div className="project-description">
                                Short description of the project. Just a couple sentences will do
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}