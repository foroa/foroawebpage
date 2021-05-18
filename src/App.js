import React from 'react' 
import { Route, Switch, Redirect } from 'react-router-dom'
import Presentation from './pages/Presentation'
import Formation from './pages/Formation'
import { ProjetIndustriel, ProjetJavascript } from './pages/Projects'
import Neurosciences from './pages/Neuro'
import Contact from './pages/Contact'
import Menu from './Menu'

function App() {
  return (
    <main>
        <div className="webpage">
            <Menu/>
            <Switch>
              <Route exact path="/" component={Presentation}/>
              <Route exact path="/formation" component={Formation}/>
              <Route exact path="/projetIndustriel" component={ProjetIndustriel}/>
              <Route exact path="/Javascript" component={ProjetJavascript}/>
              <Route exact path="/neurosciences" component={Neurosciences}/>
              <Route exact path="/contact" component={Contact}/>
              <Redirect to="/"/>
            </Switch>
        </div>
    </main>
  );
}

export default App;
