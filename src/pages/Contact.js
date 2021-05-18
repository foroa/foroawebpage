import React from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import ContactForm from '../components/ContactForm'
import ScrollButtons from '../components/ScrollButtons'

const Contact = () => (

    <div className="page">

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

    </div>
    
)

export default Contact 