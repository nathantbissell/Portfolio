import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LandingPage from './landingPage'
import Resume from './resume'
import AboutMe from './aboutMe'
import Projects from './projects'
import Contact from './contact'

const Main = () => (
  <Switch>
    <Route exact path='/' component={LandingPage} />
    <Route exact path='/aboutMe' component={AboutMe} />
    <Route exact path='/resume' component={Resume} />
    <Route exact path='/projects' component={Projects} />
    <Route exact path='/contact' component={Contact} />
  </Switch>
)

export default Main
