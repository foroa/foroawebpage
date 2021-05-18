import React from 'react'
import Projects from '../components/Projects'
import ScrollButtons from '../components/ScrollButtons'

export const ProjetIndustriel = () => (

    <div className="page">
        <h2>Projet de groupe</h2>
        <Projects projectNb={0}/>
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
