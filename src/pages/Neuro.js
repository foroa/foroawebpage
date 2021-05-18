import React from 'react'
import Neuro from '../components/Neuro'
import ScrollButtons from '../components/ScrollButtons'

const Neurosciences = () => (

    <div className="page">
        <div className="neuroContent">
            <Neuro neuroNb={2}/>
        </div>
        <div className="neuroContent">
            <Neuro neuroNb={1}/>
        </div>
        <div className="neuroContent">
            <Neuro neuroNb={0}/>
        </div>
        <ScrollButtons left = {"/Javascript"} right={"/contact"}/>
    </div>

)

export default Neurosciences