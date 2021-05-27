import React from 'react'
import ScrollButtons from '../components/ScrollButtons'

const Formation = () => (
    
    <div className="page">

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

    </div>

)

export default Formation 
