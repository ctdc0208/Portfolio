import { Component } from "react";
import { ParallaxBanner } from "react-scroll-parallax";

export default class Home extends Component {
    render() {
        return (
                <ParallaxBanner
                layers={[
                    { image: "https://images.pexels.com/photos/1809644/pexels-photo-1809644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", speed: -20, 
                    className: "inset-0 home-background gradient",
                    translateY: [0, 15],
                    scale: [1, 1.1, "easeOutCubic"],
                    shouldAlwaysCompleteAnimation: true
                    },
                    {
                        speed: -15,
                        className: "inset-0",
                        children: (
                            <div className="inset-0 max-width">
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