import React, { useState } from "react";
import { neuroData } from '../data/neuroData';


const Neuro = (props) => {
    
    const [currentProject] = useState(neuroData) 
    const neuro = currentProject[props.neuroNb]
    
    return (
            <div className="content">
                <div className="txt-area">
                    <h2>{neuro.title}</h2>
                    <h3>{neuro.lab}</h3>
                    <p>{neuro.topic}</p>
                    <div>{neuro.tasks}</div>
                    <button classNmame="btn">
                        <a href={neuro.pdf} target="blank">{neuro.pdfname}</a>
                    </button>
                </div>
                <div className="img-area">
                    <div className="img-container">
                        <img src={neuro.img} alt={neuro.title}/>
                    </div>
                </div>
            </div>    
       
    )
}

export default Neuro