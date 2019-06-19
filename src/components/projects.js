import React, { Component } from 'react'
import {
  Card,
  CardTitle,
  CardActions,
  Button,
  CardText,
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
          <Card shadow={5} className='card'>
            <CardTitle
              className='title'
              style={{
                background:
                  'url(https://nathantbissell.github.io/Portfolio/img/techup.jpg) center / cover'
              }}
            />
            <CardText>
              Built with React Class based Components, React Context, and a
              fully functional frontend deployed onto Github pages. This site
              allows you to purchase multiple tech products, add them to cart,
              view details, update quantity of items, and cash out via Paypal
              API.
            </CardText>
            <CardActions border>
              <div className='github'>
                <Button colored>Github</Button>
              </div>
            </CardActions>
          </Card>
          {/* // Project 2 */}
          <Card shadow={5} className='card'>
            <CardTitle
              className='title'
              style={{
                background:
                  'url(https://nathantbissell.github.io/Portfolio/img/rotoreact.JPG) center / cover'
              }}
            />
            <CardText>
              (React, Express, Mongodb, GA Authentication) A full-stack React
              application that allows a user to create, read, update, and delete
              fantasy football lineups.
            </CardText>
            <CardActions border>
              <div className='github'>
                <Button colored>Github</Button>
              </div>
            </CardActions>
          </Card>
          {/* // Project 3 */}
          <Card shadow={5} className='card'>
            <CardTitle
              className='title'
              style={{
                background:
                  'url(https://pbs.twimg.com/media/D9ZJ-zTWkAAXlNN?format=jpg&name=small) center / cover'
              }}
            />
            <CardText>
              React Class based Components, using state, random number
              generators, toastify notifications, and Bootstrap Progress Bars to
              simulate a constantly fluctuating stock market.
            </CardText>
            <CardActions border>
              <div className='github'>
                <Button colored>Github</Button>
              </div>
            </CardActions>
          </Card>
        </div>
      )
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <h1>Projects Pending!</h1>
        </div>
      )
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <h1>Projects Pending!</h1>
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
