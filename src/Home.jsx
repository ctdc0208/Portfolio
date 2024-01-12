export default function Home() {
    return (
        <div className="home-container home-grid-12" id="home">
            <div className="title-container">
                <div className="dev-icon svg-icon"></div>
                <div className="home-title font-700">Front-End Web Developer</div>
            </div>
            <div className="title-text font-400">Hi, I&apos;m Christian dela Cruz. A Front-End Web Developer based in Cavite, Philippines.</div>
            <div className="home-contact-links">
                <a className="linkedin-icon svg-icon" href="https://www.linkedin.com/in/ctdc0208" target="_blank" rel="noreferrer"></a>
                <a className="github-icon svg-icon" href="https://github.com/ctdc0208" target="_blank" rel="noreferrer"></a>
            </div>
            <div className="tech-stack-container">
                <div className="tech-stack-title font-400">Tech Stack</div>
                <div className="home-icon-container">
                    <div className="html-icon svg-icon"></div>
                    <div className="css-icon svg-icon"></div>
                    <div className="js-icon svg-icon"></div>
                    <div className="react-icon svg-icon"></div>
                    <div className="node-icon svg-icon"></div>
                    <div className="mongodb-icon svg-icon"></div>
                    <div className="express-icon svg-icon"></div>
                </div>
            </div>
        </div>
    )
}
// export default class Home extends Component {
//     render() {
//         return (
//                 <ParallaxBanner
//                 layers={[
//                     { speed: -20,
//                     color: "black",
//                     className: "inset-0 home-background",
//                     translateY: [0, 15],
//                     scale: [1, 1.1, "easeOutCubic"],
//                     shouldAlwaysCompleteAnimation: true
//                     },
//                     {
//                         speed: -15,
//                         className: "inset-0",
//                         children: (
//                             <div className="inset-0 grid-12">
//                                     <div className="home-padding-top top-container">
//                                         <div className="display-flex-row justify-content-space-between title-container align-items-center">
//                                             <div className="dev-icon svg-icon"></div>
//                                             <div className="main-color-font title-text">Web Developer</div>
//                                         </div>
//                                         <div className="name-text light-color-font">
//                                             Christian dela Cruz
//                                         </div>
//                                     </div>
//                                     <div className="middle-container">
//                                         <div className="display-flex-row tools-title-container align-items-center">
//                                             <div className="tools-icon svg-icon"></div>
//                                             <div className="light-color-font tools-title-text">Tools I Use</div>
//                                         </div>
//                                         <div className="tools-borderline"></div>
//                                         <div className="tools-container">
//                                             <div>
//                                                 <img src="https://img.shields.io/badge/REACT-0d0d1f?style=for-the-badge&logo=REACT&logoColor=%2361DAFB" alt="React" />
//                                                 <img src="https://img.shields.io/badge/Webpack-334047?style=for-the-badge&logo=Webpack&logoColor=%238DD6F9" alt="Webpack" />
//                                                 <img src="https://img.shields.io/badge/node.js-white?style=for-the-badge&logo=node.js&logoColor=%23339933" alt="Node.js" />
//                                                 <img src="https://img.shields.io/badge/Express-6a6a7c?style=for-the-badge&logo=Express&logoColor=%23000000" alt="Express.js" />
//                                                 <img src="https://img.shields.io/badge/MongoDB-082532?style=for-the-badge&logo=MongoDB&logoColor=%2347A248" alt="MongoDB" />
//                                                 <img src="https://img.shields.io/badge/NPM-white?style=for-the-badge&logo=npm&logoColor=cd3e3d" alt="NPM" />
//                                                 <img src="https://img.shields.io/badge/Jest-413d3e?style=for-the-badge&logo=Jest&logoColor=%23C21325" alt="Jest" />
//                                             </div>
//                                             <div>
//                                                 <img src="https://img.shields.io/badge/JAVASCRIPT-413d3e?style=for-the-badge&logo=JavaScript&logoColor=%23F7DF1E" alt="JavaScript" />
//                                                 <img src="https://img.shields.io/badge/HTML-white?style=for-the-badge&logo=HTML5&logoColor=E34F26" alt="HTML" />
//                                                 <img src="https://img.shields.io/badge/CSS-3fc0ff?style=for-the-badge&logo=CSS3&logoColor=%231572B6" alt="CSS" />
//                                             </div>
//                                             <div>
//                                                 <img src="https://img.shields.io/badge/Git-0d2034?style=for-the-badge&logo=Git&logoColor=%23F05032" alt="Git" />
//                                                 <img src="https://img.shields.io/badge/GITHUB-white?style=for-the-badge&logo=GitHub&logoColor=%23181717" alt="GitHub" />
//                                                 <img src="https://img.shields.io/badge/Figma-000000?style=for-the-badge&logo=Figma&logoColor=%23F24E1E" alt="Figma" />
//                                                 <img src="https://img.shields.io/badge/REST_API-09b7e7?style=for-the-badge" alt="REST API" />
//                                                 <img src="https://img.shields.io/badge/esLINT-0d0d1f?style=for-the-badge&logo=ESLint&logoColor=%234B32C3" alt="esLINT" />
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="bottom-container bottom-grid">
//                                         <Link to="about" spy={true} smooth={true} offset={-225} duration={500}>
//                                             <button className="bottom-text light-color-font bottom-border-left align-items-center">About me</button>
//                                         </Link>
//                                         <Link to="projects" spy={true} smooth={true} offset={-120} duration={500}>
//                                             <button className="bottom-text light-color-font bottom-border-left align-items-center">Projects</button>
//                                         </Link>
//                                         <Link to="contact" spy={true} smooth={true} offset={0} duration={500}>
//                                             <button className="bottom-text light-color-font bottom-border-left align-items-center">Contact</button>
//                                         </Link>
//                                     </div>
//                                     {/* <div className="home-name">
//                                         <div className="first-name">
//                                         Christian
//                                         </div>
//                                         <div className="last-name">
//                                         dela Cruz
//                                         </div>
//                                         <div className="web-name">
//                                         Web
//                                         </div>
//                                         <div className="developer-name">
//                                         Developer
//                                         </div>
//                                     </div> */}
//                             </div>
//                         ),
//                     },
//                   ]}
//                 id="home"
//                 factor={2}
//                 className="home-container"
//                 />
//         );
//     }
// }