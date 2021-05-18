import React from 'react'
import ScrollButtons from '../components/ScrollButtons'

const Presentation = () => (
    
    <div className="page">

        <h2>Présentation</h2>

            <div className="presentationContent">

                <div className="left-area">
                    <img src="./img/profileAF.jpg" alt="profile-pic"/>
                </div>

                <div className="right-area">
                    <div className="txt">
                        Je suis étudiante en master de compétences complémentaires en informatique à l’université d’Aix-Marseille 
                        et diplômée en Neurosciences. Un parcours universitaire pluridisciplinaire et plusieurs expériences 
                        en laboratoire de recherche m’ont permis d’affiner mon projet professionnel et me diriger vers le 
                        domaine de l’informatique. 
                    </div>
                    <div className="cv">
                        <a href="./doc/CV_AudreyForo_ENG_2021.pdf" target="blank" className="hover">mon CV (english)</a>
                    </div>
                </div>

            </div>

            <ScrollButtons right={"/formation"}/>

    </div>

)

export default Presentation 