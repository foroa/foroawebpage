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
                    Actuellement étudiante en master de compétences complémentaires en informatique, je recherche un stage de fin d’études en développement logiciel au sein d’une entreprise dans laquelle je pourrai à la fois monter en compétences, relever des défis et apporter une valeur ajoutée de par mon profil pluridisciplinaire. 
                    </div>
                    <div className="txt">Diplômée en neurosciences, j’ai choisi de compléter ma formation de base en biologie avec d’autres disciplines afin d’avoir une connaissance plus large des sciences du cerveaux et ses méthodes d’étude, et par la même, d’affiner mon projet professionnel. Mes expériences en laboratoire de recherche m’ont permis d’acquérir rigueur, 
                    persévérance et autonomie. Également, de développer un goût pour la programmation et l’utilisation d’outils informatiques. Par ailleurs, mes années d’études post-master et mon séjour Erasmus m’ont permis de développer mon ouverture d’esprit, mon adaptabilité, mes capacités de travail en équipe et le goût de la coopération.
                    </div>
                    <div className="txt">
                    Aujourd’hui, je souhaite poursuivre professionnellement dans l’informatique afin de m’investir sur des projets industriels et/ou R&amp;D, en développement back et front.  
                    </div>
                    <div className="cv">
                        <a href="./doc/CV_AudreyForo_FR_detaille_stage.pdf" target="blank" className="hover">CV en français</a>
                        <a href="./doc/CV_AudreyForo_ENG_detailed_internship.pdf" target="blank" className="hover">CV in english</a>
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
                    Student in a master of complementary skills in computer science, I am currently looking for an internship in software development. I aspire to gain new skills, meet new challenges and adding value to a company with my interdisciplinary profile.  
                    </div>
                    <div className="txt">Following graduation in neurosciences, I chose to enrich my background in biology with other disciplines in order to broaden my knowledge of brain science and its methods of study. My professional project got fined-tuned in the process. Besides, I gained discipline, perseverance, autonomy and a keen IT interest from internships in research labs. Furthermore, my post-master experiences and Erasmus exchange brought me a more open mindset, adaptability and teamwork skills. 
                    </div>
                    <div className="txt">
                    Nowadays, I want to pursue professionally in the computer science field in order to invest in projects in back and front development.
                    </div>
                    <div className="cv">
                        <a href="./doc/CV_AudreyForo_ENG_detailed_internship.pdf" target="blank" className="hover">CV in english</a>
                        <a href="./doc/CV_AudreyForo_FR_detaille_stage.pdf" target="blank" className="hover">CV en français</a>
                    </div>
                </div>

        </div>
        
        <ScrollButtons right={"/formation"}/>

    </div> ) }

    </div>

    )
}


export default Presentation 