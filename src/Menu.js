import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState, useContext } from "react"
import LangContext from './LangContext'

const Menu = () => {

   const [display, setDisplay] = useState(false)
   const contextValue = useContext(LangContext)

    return (

    <div className="menu">

        <div className="id">
            <div className="af">
                <h3>Audrey Foro</h3>
                <ul>
                    <li onClick={ ()=>{ contextValue.updateLang("français"); } }>FR</li>
                    <li onClick={ ()=>{ contextValue.updateLang("english"); } }>ENG</li>
                </ul>

            </div>
        </div>

        { contextValue.lang === "français" ? 

        (<div className="navigation">
            <hr></hr>
            <ul><br></br>
                <NavLink to="/" exact activeClassName="menu-active" onClick={()=>{setDisplay(false)}}>
                    <li>présentation</li>
                </NavLink>

                <li className="menu-formation" onClick={()=>{setDisplay(true)}}>compétences informatiques

                    {display && 
                    <ul className="menu-projets">
                        <NavLink to="/formation" activeClassName="menu-active" >
                            <li>formation</li>
                        </NavLink>
                        <NavLink to="/projetIndustriel" activeClassName="menu-active">
                            <li>projet de fin d'année</li>
                        </NavLink>
                        <NavLink to="/Javascript" activeClassName="menu-active">
                            <li>jeux javascript</li>
                        </NavLink>
                        <NavLink to="/ucdj" activeClassName="menu-active">
                            <li>site vitrine</li>
                        </NavLink>
                    </ul>
                    }
                </li>

                <NavLink to="/neurosciences" exact activeClassName="menu-active" onClick={()=>{setDisplay(false)}}>
                    <li>neurosciences</li>
                </NavLink>

                <NavLink to="/contact" exact activeClassName="menu-active" onClick={()=>{setDisplay(false)}}>
                    <li>me contacter</li>
                </NavLink>
            <br></br></ul>
            <hr></hr>
        </div>)

        : 

        ( <div className="navigation">
            <hr></hr>
            <ul><br></br>
                <NavLink to="/" exact activeClassName="menu-active" onClick={()=>{setDisplay(false)}}>
                    <li>presentation</li>
                </NavLink>

                <li className="menu-formation" onClick={()=>{setDisplay(true)}}>computer science skills

                    {display && 
                    <ul className="menu-projets">
                        <NavLink to="/formation" activeClassName="menu-active" >
                            <li>training course</li>
                        </NavLink>
                        <NavLink to="/projetIndustriel" activeClassName="menu-active">
                            <li>final year project</li>
                        </NavLink>
                        <NavLink to="/Javascript" activeClassName="menu-active">
                            <li>javascript games</li>
                        </NavLink>
                        <NavLink to="/ucdj" activeClassName="menu-active">
                            <li>Showcase website</li>
                        </NavLink>
                    </ul>
                    }
                </li>

                <NavLink to="/neurosciences" exact activeClassName="menu-active" onClick={()=>{setDisplay(false)}}>
                    <li>neurosciences</li>
                </NavLink>

                <NavLink to="/contact" exact activeClassName="menu-active" onClick={()=>{setDisplay(false)}}>
                    <li>contact me</li>
                </NavLink>
            <br></br></ul>
            <hr></hr>
        </div>
        ) }
        
        <div className="foot">
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/audrey-foro-505826200/" target="-blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/foroa" target="-blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i>
                    </a>
                </li>
            </ul>
            <div className="copyright"> © 2021 A.Foro</div>
        </div>

    </div>

    )
}

export default Menu