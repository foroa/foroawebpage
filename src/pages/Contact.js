import React from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import ContactForm from '../components/ContactForm'
import ScrollButtons from '../components/ScrollButtons'
import { useContext } from "react"
import LangContext from '../LangContext'

const Contact = () => { 

    const contextValue = useContext(LangContext)
    
    return (

    <div>
    { contextValue.lang === "français" ? 
    (<div className="page">

        <h2>Me contacter</h2>

        <div className="contactContent">

            <ContactForm />

            <div className="contactInfos">

                <div className="email">
                        <h4>email</h4>
                        <CopyToClipboard text="audrey.foro@gmail.com">
                            <p style ={{cursor: "pointer"}} 
                                className="clipboard" 
                                onClick={() => {
                                    alert('email copié !');
                                }}>audrey.foro@gmail.com
                            </p> 
                        </CopyToClipboard>
                </div>
                <br></br>      
            
            </div>

        </div>
    
        <ScrollButtons left={"/neurosciences"}/>

    </div>)
    :
    (<div className="page">

    <h2>Contact me</h2>

    <div className="contactContent">

        <ContactForm />

        <div className="contactInfos">

            <div className="email">
                    <h4>email</h4>
                    <CopyToClipboard text="audrey.foro@gmail.com">
                        <p style ={{cursor: "pointer"}} 
                            className="clipboard" 
                            onClick={() => {
                                alert('email copied !');
                            }}>audrey.foro@gmail.com
                        </p> 
                    </CopyToClipboard>
            </div>
            <br></br>      
        
        </div>

    </div>

    <ScrollButtons left={"/neurosciences"}/>

    </div>) }
        
    </div>
    )
}

export default Contact 