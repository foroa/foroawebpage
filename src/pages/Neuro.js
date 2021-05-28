import React from 'react'
import Neuro from '../components/Neuro'
import ScrollButtons from '../components/ScrollButtons'
import { useContext } from "react"
import LangContext from '../LangContext'

const Neurosciences = () => {

    const contextValue = useContext(LangContext)

    return (
    <div>

    { contextValue.lang === "français" ? 
    (<div className="page">
        <div className="neuroContent">
            <Neuro neuroNb={0}/>
        </div>
        <div className="neuroContent">
            <Neuro neuroNb={2}/>
        </div>
        <div className="neuroContent">
            <Neuro neuroNb={4}/>
        </div>
        <ScrollButtons left = {"/Javascript"} right={"/contact"}/>
    </div>)
    :
    (<div className="page">
        <div className="neuroContent">
            <Neuro neuroNb={1}/>
        </div>
        <div className="neuroContent">
            <Neuro neuroNb={3}/>
        </div>
        <div className="neuroContent">
            <Neuro neuroNb={5}/>
        </div>
        <ScrollButtons left = {"/Javascript"} right={"/contact"}/>
    </div>) }

    </div>
) }

export default Neurosciences