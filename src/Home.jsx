import { Component } from "react";
import { ParallaxBanner } from "react-scroll-parallax";

export default class Home extends Component {
    render() {
        return (
                <ParallaxBanner
                layers={[
                    { image: '../src/assets/pexels-daniel-putzer-633409.jpg', speed: -20, 
                        className: "inset-0 home-background",
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
                    }
                  ]}
                style={{ aspectRatio: '1.1 / 1' }}
                id="home"
                factor={2}
                />
        );
    }
}