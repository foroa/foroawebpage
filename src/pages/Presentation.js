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
                    Actuellement étudiante en master de compétences complémentaires en informatiques, je recherche un stage de fin d’études en développement logiciel au sein d’une entreprise dans laquelle je pourrai à la fois monter en compétences, relever des défis et apporter une valeur ajoutée de par mon profil pluridisciplinaire. 
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

    </div>

)

export default Presentation 