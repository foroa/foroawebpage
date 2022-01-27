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
        <ScrollButtons left = {"/formation"} right={"/stage"}/>
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
        <ScrollButtons left = {"/formation"} right={"/stage"}/>
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
        <div className="features">
            <h4>Missions dans un environnement Agile:</h4>
            <ul>
                <li>&#9642; Analyse des exigences et définition des User Stories</li>
                <li>&#9642; Développement et test des User stories</li>
                <li>&#9642; Rédaction de la documentation technique</li>
            </ul>
        </div>
        <ScrollButtons left = {"/projetBD"} right={"/neurosciences"}/>
    </div>)
    :
    (<div className="page">s
        <h2>Javascript game</h2>
        <Projects projectNb={3}/>
        <div className="features">
            <h4>Tasks in Agile environment:</h4>
            <ul>
                <li>&#9642; Analysis of requirements and users story definition</li>
                <li>&#9642; User stories development and testing</li>
                <li>&#9642; Technical documentation writing</li>
            </ul>
        </div>
        <ScrollButtons left = {"/projetBD"} right={"/neurosciences"}/>
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
        <ScrollButtons left = {"/stage"} right={"/projetBD"}/>
    </div>)
    :
    (<div className="page">
        <h2>FRONT Project</h2>
        <Projects projectNb={5}/>
        <ScrollButtons left = {"/stage"} right={"/projetBD"}/>
    </div>) }

    </div>
) }

export const Stage = () => {

    const contextValue = useContext(LangContext)

    return(
    <div>
    { contextValue.lang === "français" ? 
    (<div className="page">
        <h2>Stage de fin d'étude</h2>
        <Projects projectNb={6}/>
        <ScrollButtons left = {"/projetIndustriel"} right={"/projetUCDJ"}/>
    </div>)
    :
    (<div className="page">
        <h2>End of studies internship</h2>
        <Projects projectNb={7}/>
        <ScrollButtons left = {"/projetIndustriel"} right={"/projetUCDJ"}/>
    </div>) }

    </div>
) }

export const ProjetBD = () => {

    const contextValue = useContext(LangContext)

    return(
    <div>
    { contextValue.lang === "français" ? 
    (<div className="page">
        <h2>Projet scolaire de Base de données</h2>
        <Projects projectNb={8}/>
        <ScrollButtons left = {"/ucdj"} right={"/Javascript"}/>
    </div>)
    :
    (<div className="page">
        <h2>Database school project</h2>
        <Projects projectNb={9}/>
        <ScrollButtons left = {"/ucdj"} right={"/Javascript"}/>
    </div>) }

    </div>
) }
