import { Component } from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import { Link } from "react-scroll";

export default class Home extends Component {
    render() {
        return (
                <ParallaxBanner
                layers={[
                    { speed: -20,
                    color: "black",
                    className: "inset-0 home-background",
                    translateY: [0, 15],
                    scale: [1, 1.1, "easeOutCubic"],
                    shouldAlwaysCompleteAnimation: true
                    },
                    {
                        speed: -15,
                        className: "inset-0",
                        children: (
                            <div className="inset-0 grid-12">
                                    <div className="home-padding-top top-container">
                                        <div className="display-flex-row justify-content-space-between title-container align-items-center">
                                            <div className="dev-icon svg-icon"></div>
                                            <div className="main-color-font title-text">Web Developer</div>
                                        </div>
                                        <div className="name-text light-color-font">
                                            Christian dela Cruz
                                        </div>
                                    </div>
                                    <div className="middle-container">
                                        <div className="display-flex-row tools-title-container align-items-center">
                                            <div className="tools-icon svg-icon"></div>
                                            <div className="light-color-font tools-title-text">Tools I Use</div>
                                        </div>
                                        <div className="tools-borderline"></div>
                                        <div className="tools-container">
                                            <div>
                                                <img src="https://img.shields.io/badge/REACT-0d0d1f?style=for-the-badge&logo=REACT&logoColor=%2361DAFB" alt="React Badge" />
                                                <img src="https://img.shields.io/badge/Webpack-334047?style=for-the-badge&logo=Webpack&logoColor=%238DD6F9" alt="Webpack Badge" />
                                                <img src="https://img.shields.io/badge/node.js-white?style=for-the-badge&logo=node.js&logoColor=%23339933" alt="Node.js Badge" />
                                                <img src="https://img.shields.io/badge/NPM-white?style=for-the-badge&logo=npm&logoColor=cd3e3d" alt="NPM Badge" />
                                                <img src="https://img.shields.io/badge/Jest-413d3e?style=for-the-badge&logo=Jest&logoColor=%23C21325" alt="Jest Badge" />
                                            </div>
                                            <div>
                                                <img src="https://img.shields.io/badge/JAVASCRIPT-413d3e?style=for-the-badge&logo=JavaScript&logoColor=%23F7DF1E" alt="JavaScript Badge" />
                                                <img src="https://img.shields.io/badge/HTML-white?style=for-the-badge&logo=HTML5&logoColor=E34F26" alt="HTML Badge" />
                                                <img src="https://img.shields.io/badge/CSS-3fc0ff?style=for-the-badge&logo=CSS3&logoColor=%231572B6" alt="CSS Badge" />
                                            </div>
                                            <div>
                                                <img src="https://img.shields.io/badge/Git-0d2034?style=for-the-badge&logo=Git&logoColor=%23F05032" alt="Git Badge" />
                                                <img src="https://img.shields.io/badge/GITHUB-white?style=for-the-badge&logo=GitHub&logoColor=%23181717" alt="GitHub Badge" />
                                                <img src="https://img.shields.io/badge/Figma-000000?style=for-the-badge&logo=Figma&logoColor=%23F24E1E" alt="Figma" />
                                                <img src="https://img.shields.io/badge/REST_API-09b7e7?style=for-the-badge" alt="REST API Badge" />
                                                <img src="https://img.shields.io/badge/esLINT-0d0d1f?style=for-the-badge&logo=ESLint&logoColor=%234B32C3" alt="esLINT Badge" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bottom-container bottom-grid">
                                        <Link to="about" spy={true} smooth={true} offset={-225} duration={500}>
                                            <button className="bottom-text light-color-font bottom-border-left align-items-center">About me</button>
                                        </Link>
                                        <Link to="projects" spy={true} smooth={true} offset={-120} duration={500}>
                                            <button className="bottom-text light-color-font bottom-border-left align-items-center">Projects</button>
                                        </Link>
                                        <Link to="contact" spy={true} smooth={true} offset={0} duration={500}>
                                            <button className="bottom-text light-color-font bottom-border-left align-items-center">Contact</button>
                                        </Link>
                                    </div>
                                    {/* <div className="home-name">
                                        <div className="first-name">
                                        Christian
                                        </div>
                                        <div className="last-name">
                                        dela Cruz
                                        </div>
                                        <div className="web-name">
                                        Web
                                        </div>
                                        <div className="developer-name">
                                        Developer
                                        </div>
                                    </div> */}
                            </div>
                        ),
                    },
                  ]}
                id="home"
                factor={2}
                className="home-container"
                />
        );
    }
}