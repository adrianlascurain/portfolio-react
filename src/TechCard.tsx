import { useState } from "react";

function TechCard({techName, image}: {techName: string, image: string}){
    const [visibility,setVisibility] = useState('none');
    const [opacityValue,setOpacityValue] = useState(0.6);

    function handleMouseEnter() {
        setVisibility('block');
        setOpacityValue(0.7);
    }// handleMouseEnter

    function handleMouseLeave() {
        setVisibility('none');
        setOpacityValue(0);
    }// handleMouseLeave

    return (
        <div className="tech-card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <figure>
                <img src={image} alt={techName} />
            </figure>
            <div className="tech-name-container" style={{display: visibility}}>
                <div className="blur-container" style={{opacity: opacityValue}}></div>
                <div className="tech-name">
                    <h3>{techName}</h3>
                </div>
            </div>
        </div>
    );
} // TechCard

export default TechCard;