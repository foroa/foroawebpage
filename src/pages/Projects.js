import React from 'react'
import Projects from '../components/Projects'
import ScrollButtons from '../components/ScrollButtons'
import { useContext } from "react"
import LangContext from '../LangContext'

export const ProjetIndustriel = () => {

    const contextValue = useContext(LangContext)

    return(
    <div>
    { contextValue.lang === "français" ? 
    (<div className="page">
        <h2>Projet de groupe (industriel)</h2>
        <Projects projectNb={0}/>
        <div className="features">
            <h4>Fonctionalités implémentées :</h4>
            <ul>
                <li>&#9642; formulaire d'authentification de l'utilisateur avec saisie d'identifiant et mot de passe.</li>
                <li>&#9642; page d'accueil avec un tableau de bord permettant la visualisation des évènements à venir et accès rapide aux fonctionnalités de l'application.</li>
                <li>&#9642; affichage de l'emploi du temps avec les évènements enregistrés (ex: les cours auxquels l'utilisateur est inscrit) avec plusieurs options d'affichage et de navigation.</li>
                <li>&#9642; plusieurs pages dédiées à la gestion de l'emploi du temps : création/modification/suppression d'unités d'enseignement, de groupes étudiants, de groupes d'enseignants, d'utilisateurs...</li>
                <li>&#9642; plusieurs pages dédiées à la consultation des informations relatives aux unités d'enseignement, étudiants, enseignants et filières.</li>
            </ul>
        </div>
        <ScrollButtons left = {"/formation"} right={"/Javascript"}/>
    </div>)
    :
    (<div className="page">
        <h2>Team industrial project</h2>
        <Projects projectNb={1}/>
        <div className="features">
            <h4>Implemented features:</h4>
            <ul>
                <li>&#9642; user authentication form with login and password entry.</li>
                <li>&#9642; home page with a dashboard for viewing upcoming events and having a quick access to application features.</li>
                <li>&#9642; display of the timetable with events (e.g. registered courses of the user) with several display and navigation options.</li>
                <li>&#9642; several pages dedicated to the management of the timetable: creation / modification / deletion of teaching units, student groups, groups of teachers, users ...</li>
                <li>&#9642; several pages for consulting informations related to teaching units, students, teachers and courses.</li>
            </ul>
        </div>
        <ScrollButtons left = {"/formation"} right={"/Javascript"}/>
    </div>) }

    </div>
) }

export const ProjetJavascript = () => {

    const contextValue = useContext(LangContext)
    
    return (
    <div>

    { contextValue.lang === "français" ? 
    (<div className="page">
        <h2>Jeux javascript</h2>
        <Projects projectNb={2}/>
        <ScrollButtons left = {"/projetIndustriel"} right={"/ucdj"}/>
    </div>)
    :
    (<div className="page">s
        <h2>Javascript game</h2>
        <Projects projectNb={3}/>
        <ScrollButtons left = {"/projetIndustriel"} right={"/ucdj"}/>
    </div>) }

    </div>

) }

export const ProjetUCDJ = () => {

    const contextValue = useContext(LangContext)

    return(
    <div>
    { contextValue.lang === "français" ? 
    (<div className="page">
        <h2>Projet FRONT</h2>
        <Projects projectNb={4}/>
        <ScrollButtons left = {"/Javascript"} right={"/neurosciences"}/>
    </div>)
    :
    (<div className="page">
        <h2>Projet FRONT</h2>
        <Projects projectNb={5}/>
        <ScrollButtons left = {"/Javascript"} right={"/neurosciences"}/>
    </div>) }

    </div>
) }
