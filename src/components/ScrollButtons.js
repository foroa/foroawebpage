import React from 'react'
import { NavLink } from 'react-router-dom'
import { useContext } from "react"
import LangContext from '../LangContext'

const ScrollButtons = (props) => {

    const contextValue = useContext(LangContext)

    return (

    <div className="scroll-bottom">
        <div className="sb-main">
            <div>
            { props.left && (
                <NavLink to={props.left}>
                    <span>&#8672;</span>
                </NavLink>
            ) }
            </div>
            { contextValue.lang === "français" ? 
                (<p className="center">Naviguer</p>) : (<p className="center">Scroll</p>) }
            <div>
                { props.right && (
                <NavLink to={props.right}>
                    <span>&#8674;</span>
                </NavLink>
            ) }
            </div>
        </div>
    </div>
    
    ) }

export default ScrollButtons