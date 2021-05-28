import React from 'react'
import ScrollButtons from '../components/ScrollButtons'
import { useContext } from "react"
import LangContext from '../LangContext'

const Formation = () => {

    const contextValue = useContext(LangContext)
    
    return (
    
    <div>

    { contextValue.lang === "français" ? 
    ( <div className="page">

        <h2>Formation en cours 2020/2021<br></br>Master de Compétences complémentaires en informatique - Aix-Marseille Université</h2>

        <div className="m2cci">

            <div className="m2cciContent">

                <table>
                    <tr>
                        <th>Unité d'enseignement</th>
                        <th>Volume horaire</th>
                        <th>Langages</th>
                        <th>Outils/Technologies</th>
                    </tr>
                    <tr>
                        <td className="bold">Programmation</td>
                        <td>120h</td>
                        <td>Java, C</td>
                        <td>Eclipse, Replit</td>
                    </tr>
                    <tr>
                        <td className="bold">Bases de données</td>
                        <td>60h</td>
                        <td>SQL</td>
                        <td>phpMyAdmin</td>
                    </tr>
                    <tr>
                        <td className="bold">Langages du Web</td>
                        <td>60h</td>
                        <td>HTML, CSS, Javascript ,PHP</td>
                        <td>Laravel, Bootstrap, JQuery, Visual Studio, Replit</td>
                    </tr>
                    <tr>
                        <td className="bold">Système UNIX</td>
                        <td>30h</td>
                        <td>bash</td>
                        <td>Ubuntu</td>
                    </tr>
                    <tr>
                        <td className="bold">Développement Android</td>
                        <td>30h</td>
                        <td>Java</td>
                        <td>Android Studio</td>
                    </tr>
                    <tr>
                        <td className="bold">Type de données et algorithmes</td>
                        <td>30h</td>
                        <td>C</td>
                        <td>Replit</td>
                    </tr>
                    <tr>
                        <td className="bold">Projet industriel</td>
                        <td>120h</td>
                        <td>PHP, SQLite, HTML, CSS, Javascript</td>
                        <td>Laravel, TalwindCSS, FullCalendar, JQuery</td>
                    </tr>

                </table>

            </div>
            
        </div>

        <ScrollButtons left = {"/"} right={"/projetIndustriel"}/>

    </div>)
    :
    ( <div className="page">

        <h2>Current Training course 2020/2021<br></br>Master of Complementary skills in computer sciences - University of Aix-Marseille</h2>

        <div className="m2cci">

            <div className="m2cciContent">

                <table>
                    <tr>
                        <th>Subject</th>
                        <th>Number of hours</th>
                        <th>Languages</th>
                        <th>Tools/Technologies</th>
                    </tr>
                    <tr>
                        <td className="bold">Programmation</td>
                        <td>120h</td>
                        <td>Java, C</td>
                        <td>Eclipse, Replit</td>
                    </tr>
                    <tr>
                        <td className="bold">Data base</td>
                        <td>60h</td>
                        <td>SQL</td>
                        <td>phpMyAdmin</td>
                    </tr>
                    <tr>
                        <td className="bold">Web Languages</td>
                        <td>60h</td>
                        <td>HTML, CSS, Javascript ,PHP</td>
                        <td>Laravel, Bootstrap, JQuery, Visual Studio, Replit</td>
                    </tr>
                    <tr>
                        <td className="bold">UNIX System</td>
                        <td>30h</td>
                        <td>bash</td>
                        <td>Ubuntu</td>
                    </tr>
                    <tr>
                        <td className="bold">Développement Android</td>
                        <td>30h</td>
                        <td>Java</td>
                        <td>Android Studio</td>
                    </tr>
                    <tr>
                        <td className="bold">Data structure and algorithms</td>
                        <td>30h</td>
                        <td>C</td>
                        <td>Replit</td>
                    </tr>
                    <tr>
                        <td className="bold">Industrial project</td>
                        <td>120h</td>
                        <td>PHP, SQLite, HTML, CSS, Javascript</td>
                        <td>Laravel, TalwindCSS, FullCalendar, JQuery</td>
                    </tr>

                </table>

            </div>
            
        </div>

        <ScrollButtons left = {"/"} right={"/projetIndustriel"}/>

    </div> ) }

    </div>

    )
}

export default Formation 
