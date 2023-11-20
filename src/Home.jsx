import { Component } from "react";
import { ParallaxBanner } from "react-scroll-parallax";

export default class Home extends Component {
    render() {
        return (
                <ParallaxBanner
                layers={[
                    { image: "../src/assets/wallpaper.png", speed: -20, 
                    className: "inset-0 home-background gradient",
                    translateY: [0, 15],
                    scale: [1, 1.1, "easeOutCubic"],
                    shouldAlwaysCompleteAnimation: true
                    },
                    {
                        speed: -15,
                        className: "inset-0",
                        children: (
                            <div className="inset-0">
                                <div className="home-name">
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
                                </div>
                            </div>
                        ),
                    },
                    {
                        opacity: [0, 1, "easeOutCubic"],
                        shouldAlwaysCompleteAnimation: true,
                        expanded: false,
                        children: <div className="gradient inset" />
                    }
                  ]}
                id="home"
                factor={2}
                className="home-container"
                />
        );
    }
}