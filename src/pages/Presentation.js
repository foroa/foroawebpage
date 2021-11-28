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
                    Prochainement diplômé d’un master de compétences complémentaires en informatique, je suis actuellement à la recherche d’un poste d’ingénieur en développement logiciel au sein d’une entreprise dans laquelle je pourrai à la fois renforcer mes compétences, relever des défis et apporter une valeur ajoutée de par mon profil pluridisciplinaire.  
                    </div>
                    <div className="txt">Un bagage en neurosciences et plusieurs expériences en laboratoire de recherche m’ont permis d’acquérir rigueur, persévérance et autonomie, également, un goût pour la programmation informatiques. Par ailleurs, un séjour Erasmus m’a permis de développer mon ouverture d’esprit, mon adaptabilité et mes capacités de travail en équipe. Aujourd’hui, je souhaite poursuivre professionnellement dans l’informatique afin de m’investir sur dans des projets industriels et/ou R&D. 
                    </div>
                    {/* <div className="txt">
                    Aujourd’hui, je souhaite poursuivre professionnellement dans l’informatique afin de m’investir sur des projets industriels et/ou R&amp;D, en développement back et front.  
                    </div> */}
                    <div className="cv">
                        <a href="./doc/CV_AudreyForo_Dev_2022_longversion_FR.pdf" target="blank" className="hover">CV en français</a>
                        <a href="./doc/CV_AudreyForo_Dev_2022_longversion_ENG.pdf" target="blank" className="hover">CV in english</a>
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
                    Soon graduated in computer science skills, I am currently looking for a software engineer/developer position within a company where I would be able to strengthen my skills, take up challenges and bring value with my multidisciplinary profile.   
                    </div>
                    <div className="txt">A background in neuroscience and several experiences in research labs enabled me to acquire rigour, perseverance and autonomy, also, a keen taste in programming. Furthermore, an Erasmus exchange brought me open-mindedness, adaptability and teamwork skills. Today, I want to pursue a computer science career by getting involved in industrial and/or R&D projects.  
                    </div>
                    {/* <div className="txt">
                    Nowadays, I want to pursue professionally in the computer science field in order to invest in projects in back and front development.
                    </div> */}
                    <div className="cv">
                        <a href="./doc/CV_AudreyForo_Dev_2022_longversion_ENG.pdf" target="blank" className="hover">CV in english</a>
                        <a href="./doc/CV_AudreyForo_Dev_2022_longversion_FR.pdf" target="blank" className="hover">CV en français</a>
                    </div>
                </div>

        </div>
        
        <ScrollButtons right={"/formation"}/>

    </div> ) }

    </div>

    )
}


export default Presentation 