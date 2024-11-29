import { useState } from "react";

function TechCard({techName, image}: {techName: string, image: string}){
    const [visibility,setVisibility] = useState('none');

    function handleMouseEnter() {
        setVisibility('block')
    }// handleMouseEnter

    function handleMouseLeave() {
        setVisibility('none')
    }// handleMouseLeave

    return (
        <div className="tech-card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <figure>
                <img src={image} alt={techName} />
            </figure>
            <div className="tech-name-container" style={{display: visibility}}>
                <div className="blur-container"></div>
                <div className="tech-name">
                    <h3>{techName}</h3>
                </div>
            </div>
        </div>
    );
} // TechCard

export default TechCard;