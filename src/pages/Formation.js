import React from 'react'
import ScrollButtons from '../components/ScrollButtons'

const Formation = () => (
    
    <div className="page">

        <h2>Formation : Master de Compétences complémentaires en informatique - Aix-Marseille Université</h2>

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
                        <li>Visual Studio - Eclipse</li>
                        <li>Laravel - Android Studio</li>
                        <li>SQLite - phpMyAdmin</li>
                        <li>GitLab</li>
                    </ul>
                </div>
                <div className="subjects">
                    <h4>UEs</h4><hr></hr>
                    <ul>
                        <li>Programmation</li>
                        <li>Bases de données</li>
                        <li>Langgages du Web</li>
                        <li>Développement Android</li>
                        <li>Systèmes UNIX</li>
                        <li>Type de données et algorithmes</li>
                    </ul>
                </div>

            </div>
            
        </div>

        <ScrollButtons left = {"/"} right={"/projetIndustriel"}/>

    </div>

)

export default Formation 
