import React from 'react'
import ScrollButtons from '../components/ScrollButtons'
import { useContext } from "react"
import LangContext from '../LangContext'


const Presentation = () => {

    const contextValue = useContext(LangContext)

    return (
    
    <div>

    { contextValue.lang === "français" ?
    (<div className="page">
        
        <h2>Présentation</h2>

        <div className="presentationContent">

                <div className="left-area">
                    <img src="./img/profileAF.jpg" alt="profile-pic"/>
                </div>

                <div className="right-area">
                    <div className="txt">
                    Fraîchement
diplômée d’un master de compétences complémentaires en informatique, je suis
actuellement à la recherche d’un poste d’ingénieur en développement logiciel au sein d’une entreprise dans
laquelle je pourrai à la fois renforcer mes compétences, relever des défis et apporter une valeur ajoutée de
par mon profil pluridisciplinaire.                    </div>
                    <div className="txt">
                    Un bagage en neurosciences et plusieurs expériences en laboratoire de recherche m’ont permis
d’acquérir rigueur, persévérance et autonomie Par ailleurs, j'ai eu l'opportunité de développer mon
ouverture d’esprit, mon adaptabilité et mes capacités de travail en équipe au cours d'un séjour Erasmus
Aujourd’hui je souhaite poursuivre professionnellement dans l’informatique afin de m’investir dans
des projets R&D et/ou industriels.
                    </div>
                    <div className="cv">
                        <a href="./doc/CV_AudreyForo_Dev_2022_website_FR.pdf" target="blank" className="hover">CV en français</a>
                        <a href="./doc/CV_AudreyForo_Dev_2022_website_ENG.pdf" target="blank" className="hover">CV in english</a>
                    </div>
                </div>

        </div>
        
        <ScrollButtons right={"/formation"}/>

    </div>)

    :

    (<div className="page">

        
        <h2>Introduction</h2>

        <div className="presentationContent">

                <div className="left-area">
                    <img src="./img/profileAF.jpg" alt="profile-pic"/>
                </div>

                <div className="right-area">
                    <div className="txt">
                    Freshly graduate of a complementary skills in computer sciences masters from University of Aix-Marseille, I am currently looking for a software engineer/developer position within a company where I would be able to strengthen my skills, take up challenges and bring value with my interdisciplinary profile.                     </div>
                    <div className="txt">
                    A background in neuroscience and several experiences in research labs enabled me to acquire rigour, perseverance and autonomy. Furthermore, an Erasmus exchange brought me open-mindedness, adaptability and teamwork skills. Today, I want to pursue a computer science career by getting involved in R&D and/or industrial projects.                     </div>
                    <div className="cv">
                        <a href="./doc/CV_AudreyForo_Dev_2022_website_ENG.pdf" target="blank" className="hover">CV in english</a>
                        <a href="./doc/CV_AudreyForo_Dev_2022_website_FR.pdf" target="blank" className="hover">CV en français</a>
                    </div>
                </div>

        </div>
        
        <ScrollButtons right={"/formation"}/>

    </div> ) }

    </div>

    )
}


export default Presentation 