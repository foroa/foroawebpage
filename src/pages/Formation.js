import React from 'react'
import ScrollButtons from '../components/ScrollButtons'

const Formation = () => (
    
    <div className="page">

        <h2>Formation en cours 2020/2021<br></br>Master de Compétences complémentaires en informatique - Aix-Marseille Université</h2>

        <div className="m2cci">

            <div className="m2cciContent">

                <div className="lang">
                    <h4>Langages</h4><hr></hr>
                    <ul>
                        <li>C - Java - PHP</li>
                        <li>HTML - CSS - Javascript</li>
                        <li>SQL</li>
                    </ul>
                </div>
                <div className="tech">
                    <h4>Technologies/Outils</h4><hr></hr>
                    <ul>
                        <li>Eclipse</li>
                        <li>Visual Studio - Android Studio</li>
                        <li>Laravel</li>
                        <li>SQLite - phpMyAdmin</li>
                        <li>GitLab</li>
                    </ul>
                </div>
                <div className="subjects">
                    <h4>UEs</h4><hr></hr>
                    <ul>
                        <li>Programmation (120h) - Java, C + Eclipse, replit</li>
                        <li>Bases de données (30h) - SQL + phpMyAdmin, Oracle </li>
                        <li>Langages du Web (60h) - HTML, CSS, Javascript ,PHP + Laravel, Bootstrap, SQLite</li>
                        <li>Développement Android (30h) - Java + Android Studio</li>
                        <li>Système UNIX (30h) - bash</li>
                        <li>Type de données et algorithmes (30h) - C + replit</li>
                        <li>Projet industriel (120h) - voir page suivante</li>
                    </ul>
                </div>

            </div>
            
        </div>

        <ScrollButtons left = {"/"} right={"/projetIndustriel"}/>

    </div>

)

export default Formation 
