import React from 'react'
import { NavLink } from 'react-router-dom'

const ScrollButtons = (props) => (

    <div className="scroll-bottom">
        <div className="sb-main">
            <div>
            { props.left && (
                <NavLink to={props.left}>
                    <span>&#8672;</span>
                </NavLink>
            ) }
            </div>
            <p className="center">Naviguer</p>
            <div>
                { props.right && (
                <NavLink to={props.right}>
                    <span>&#8674;</span>
                </NavLink>
            ) }
            </div>
        </div>
    </div>
    
)

export default ScrollButtons