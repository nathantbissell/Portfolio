import React, { Component } from 'react'
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl'
import { Link } from 'react-router-dom'
import './App.css'
import Main from './components/main.js'

function App() {
  return (
    <div className='demo-big-content'>
      <Layout>
        <Header title='Title' scroll>
          <Navigation>
            <Link to='/resume'>Resume</Link>
            <Link to='/aboutMe'>About Me</Link>
            <Link to='/projects'>Projects</Link>
            <Link to='/contact'>Contact</Link>
          </Navigation>
        </Header>
        <Drawer title='Title'>
          <Navigation>
            <Link to='/resume'>Resume</Link>
            <Link to='/aboutMe'>About Me</Link>
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
  )
}

export default App
