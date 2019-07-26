import React from 'react'
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl'
import { Link, HashRouter } from 'react-router-dom'
import './App.css'
import Main from './components/main.js'

const App = () => {
  return (
    <HashRouter>
    <div className='demo-big-content'>
      <Layout>
        <Header className='header-color' title='NBMT inc.' scroll>
          <Navigation>
            <Link to='/'>Home</Link>
            <Link to='/resume'>Resume</Link>
            <Link to='/projects'>Projects</Link>
            <Link to='/contact'>Contact</Link>
          </Navigation>
        </Header>
        <Drawer title='Nate Biss'>
          <Navigation>
            <Link to='/'>Home</Link>
            <Link to='/resume'>Resume</Link>
            <Link to='/projects'>Projects</Link>
            <Link to='/contact'>Contact</Link>
          </Navigation>
        </Drawer>
        <Content>
          <div className='page-content' />
          <Main />
        </Content>
      </Layout>
    </div>
    </HashRouter>
  )
}

export default App
