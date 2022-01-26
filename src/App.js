import React from 'react' 
import { Route, Switch, Redirect } from 'react-router-dom'
import Presentation from './pages/Presentation'
import Formation from './pages/Formation'
import { ProjetIndustriel, ProjetJavascript, ProjetUCDJ } from './pages/Projects'
import Neurosciences from './pages/Neuro'
import Contact from './pages/Contact'
import Menu from './Menu'

import { useState } from "react"
import LangContext from "./LangContext" 


function App() {

  //const LangContext = React.createContext('french');
  const [lang, setLang] = useState("français")

  const contextValue = {
    lang: lang, // on peut noter uniquement lang
    updateLang: setLang
  }

  return (
    <LangContext.Provider value={contextValue}>
    <main>
        <div className="webpage">
            <Menu/>
            <Switch>
              <Route exact path="/" component={Presentation}/>
              <Route exact path="/formation" component={Formation}/>
              <Route exact path="/projetIndustriel" component={ProjetIndustriel}/>
              <Route exact path="/Javascript" component={ProjetJavascript}/>
              <Route exact path="/ucdj" component={ProjetUCDJ}/>
              <Route exact path="/neurosciences" component={Neurosciences}/>
              <Route exact path="/contact" component={Contact}/>
              <Redirect to="/"/>
            </Switch>
        </div>
    </main>
    </LangContext.Provider>
  );
}

export default App;
