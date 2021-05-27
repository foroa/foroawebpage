import React from 'react'
import Projects from '../components/Projects'
import ScrollButtons from '../components/ScrollButtons'

export const ProjetIndustriel = () => (

    <div className="page">
        <h2>Projet de groupe (industriel)</h2>
        <Projects projectNb={0}/>
        <div className="features">
            <h4>Fonctionalités implémentées :</h4>
            <ul>
                <li>&#9642; formulaire d'authentification de l'utilisateur avec saisie d'identifiant et mot de passe.</li>
                <li>&#9642; page d'accueil avec un tableau de bord permettant la visualisation des évènements à venir et accès rapide aux fonctionalités de l'application.</li>
                <li>&#9642; affichage de l'emploi du temps avec les évènements enregistrés (ex: les cours auxquels l'utilisateur est inscrit) avec plusieurs options d'affichage et de navigation.</li>
                <li>&#9642; plusieurs pages dédiées à la gestion de l'emploi du temps : création/modification/suppression d'unités d'enseignement, de groupes étudiants, de groupes d'enseignants, d'utilisateurs...</li>
                <li>&#9642; plusieurs pages dédiées à la consultation des informations relatives aux unités d'enseignement, étudiants, enseignants et filières.</li>
            </ul>
        </div>
        <ScrollButtons left = {"/formation"} right={"/Javascript"}/>
    </div>

)

export const ProjetJavascript = () => (

    <div className="page">
        <h2>Jeux javascript</h2>
        <Projects projectNb={1}/>
        <ScrollButtons left = {"/projetIndustriel"} right={"/neurosciences"}/>
    </div>

)
