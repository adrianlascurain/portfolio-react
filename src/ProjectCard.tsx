import reactLogo from './assets/react.svg';
import gitHubLogo from './assets/github-color-svgrepo-com.svg';
import wwwLogo from './assets/internet-www-svgrepo-com.svg';
import { useState } from "react";

function ProjectCard({title,description,image,gif,repositoryURL,liveURL}: {title: string, description: string, image: string, gif: string, repositoryURL: string, liveURL:string}) {
    // ,frontTechs,backTechs     ,frontTechs: string[],backTechs: string[]
    const [mediaToDisplay,setmediaToDisplay] = useState(image);
    const [hoverDisplay,setHoverDisplay] = useState('none');
    const [repoDisplay,setRepoDisplay] = useState('none');
    const [liveDisplay,setLiveDisplay] = useState('none');

    // Check if live and repository URL's are not empty
    function handleOnLoad(){
        !repositoryURL ? setRepoDisplay('none') : setRepoDisplay('block');
        !liveURL ? setLiveDisplay('none') : setLiveDisplay('block');
    }

    function handleMouseEnter(){
        setmediaToDisplay(gif);
        setHoverDisplay('block');
    }// handleMouseEnter

    function handleMouseLeave(){
        setmediaToDisplay(image);
        setHoverDisplay('none');
    }// handleMouseLeave

    return(
        <div className="project-card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onLoad={handleOnLoad}>
            <figure className="project-img-frame">
                <img className="project-img" src={mediaToDisplay} alt="login-pacs" />
            </figure>

            <div className="projet-description">
                <h3 className="h3-project-title">{title}</h3>
                <hr className="title-separator" />
                <p className="project-description-text">{description}</p>
            </div>

            <div className="project-tech-skills">
                <div className="front-end-techs">
                    <h4 className="h4-project-tech">Frontend</h4>
                    <div className="techs-container">
                        <figure className="tech-img-frame">
                            <img className="tech-img" src={reactLogo} alt=""/>
                        </figure>

                        <figure className="tech-img-frame">
                            <img className="tech-img" src={reactLogo} alt=""/>
                        </figure>
                        <figure className="tech-img-frame">
                            <img className="tech-img" src={reactLogo} alt=""/>
                        </figure>
                        <figure className="tech-img-frame">
                            <img className="tech-img" src={reactLogo} alt=""/>
                        </figure>
                        <figure className="tech-img-frame">
                            <img className="tech-img" src={reactLogo} alt=""/>
                        </figure>
                        <figure className="tech-img-frame">
                            <img className="tech-img" src={reactLogo} alt=""/>
                        </figure>

                    </div>
                </div>

                <div className="back-end-techs">
                    <h4 className="h4-project-tech">Backend</h4>
                    <div className="techs-container">
                        <figure className="tech-img-frame">
                            <img className="tech-img" src="./assets/html-5-svgrepo-com.svg" alt=""/>
                        </figure>

                    </div>
                </div>
            </div>
        
        <div className="hover-container" style={{display: hoverDisplay}}>
            <div className="project-card-blur-container"></div>
                <div className="anchor-container">
                    <a className="live-anchor" href={liveURL} target='_blank' style={{display: liveDisplay}}>
                        <figure className="anchor-frame">
                            <img src={wwwLogo} alt="ir a live" />
                        </figure>
                    </a>

                    <a className="repository-anchor" href={repositoryURL} target='_blank' style={{display: repoDisplay}}>
                        <figure className="anchor-frame">
                            <img src={gitHubLogo} alt="Repositorio" />
                        </figure>
                    </a>
                </div>
            </div>
        </div>
    )
}// ProjectCard

export default ProjectCard;