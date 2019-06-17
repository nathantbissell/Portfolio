import React, { Component } from 'react'
import {
  Card,
  CardTitle,
  CardActions,
  Button,
  CardMenu,
  CardText,
  IconButton,
  Grid,
  Cell,
  Tabs,
  Tab
} from 'react-mdl'

export default class projects extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeTab: 0
    }
  }

  toggleCategories = () => {
    if (this.state.activeTab === 0) {
      return (
        <div className='project-grid'>
          {/* // Project 1 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: '#FFF',
                height: '176px',
                background:
                  'url(http://www.dochollypetvet.com/doc_uploads/2018/01/pexels-photo-551628-400x400.jpeg) center / cover'
              }}
            >
              React Project #1
            </CardTitle>
            <CardText>sample text</CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name='share' />
            </CardMenu>
          </Card>
          {/* // Project 2 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: '#FFF',
                height: '176px',
                background:
                  'url(https://i.pinimg.com/originals/f9/35/16/f935166508d3f17aa61c56cac76ac852.jpg) center / cover'
              }}
            >
              React Project #2
            </CardTitle>
            <CardText>sample text</CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name='share' />
            </CardMenu>
          </Card>
          {/* // Project 3 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: '#FFF',
                height: '176px',
                background:
                  'url(https://pbs.twimg.com/profile_images/1112594177961844736/qQK8NJT-.jpg) center / cover'
              }}
            >
              React Project #3
            </CardTitle>
            <CardText>sample text</CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name='share' />
            </CardMenu>
          </Card>
        </div>
      )
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <h1>This is Ruby on Rails</h1>
        </div>
      )
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <h1>This is JS</h1>
        </div>
      )
    }
  }

  render() {
    return (
      <div className='category-tabs'>
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React</Tab>
          <Tab>Ruby on Rails</Tab>
          <Tab>JS</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className='content'>{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    )
  }
}
