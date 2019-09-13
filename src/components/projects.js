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
                  'url(https://i.imgur.com/1Y0XBLy.jpg) center / cover'
              }}
            />
            <CardText>
              A original experiment featuring React Class Components, Lifecycle
              Methods, ChartJS, toastify notifications, and Bootstrap Progress
              Bars to simulate a constantly fluctuating stock market.
            </CardText>
            <CardActions border>
              <div className='github'>
                <Button colored>
                  <a
                    href='https://github.com/nathantbissell/stocks'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Github
                  </a>
                </Button>
                <Button colored>
                  <a
                    href='https://nathantbissell.github.io/stocks'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Live Site
                  </a>
                </Button>
              </div>
            </CardActions>
          </Card>
          {/* // Project 2 */}
          <Card shadow={5} className='card'>
            <CardTitle
              className='title'
              style={{
                background:
                  'url(https://nathantbissell.github.io/OldPortfolio/img/techup.jpg) center / cover'
              }}
            />
            <CardText>
              Built with React Class based Components with Context. This site
              allows you to purchase multiple tech products, add them to cart,
              view details, update quantity of items, and cash out via Paypal
              API.
            </CardText>
            <CardActions border>
              <div className='github'>
                <Button colored>
                  <a
                    href='https://github.com/nathantbissell/ecommerce'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Github
                  </a>
                </Button>
                <Button colored>
                  <a
                    href='https://nathantbissell.github.io/ecommerce'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Live Site
                  </a>
                </Button>
              </div>
            </CardActions>
          </Card>
          {/* // Project 3 */}
          <Card shadow={5} className='card'>
            <CardTitle
              className='title'
              style={{
                background:
                  'url(https://i.imgur.com/1isCpHh.jpg) center / cover'
              }}
            />
            <CardText>
              (React Hooks, MongoDB, Express, Node, jwtoken, bcrypt) A
              full-stack React application that allows you to register, login,
              and create a To-Do List, complete tasks, and delete tasks.
            </CardText>
            <CardActions border>
              <div className='github'>
                <Button colored>
                  <a
                    href='https://github.com/nathantbissell/mern-auth'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Github
                  </a>
                </Button>
                <Button colored>
                  <a
                    href='https://still-retreat-34735.herokuapp.com/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Live Site
                  </a>
                </Button>
              </div>
            </CardActions>
          </Card>
          {/* // Project 4 */}

          <Card shadow={5} className='card'>
            <CardTitle
              className='title'
              style={{
                background:
                  'url(https://nathantbissell.github.io/OldPortfolio/img/rotoreact.JPG) center / cover'
              }}
            />
            <CardText>
              (React, Express, Mongodb, GA Authentication) A full-stack React
              application that allows a user to create, read, update, and delete
              fantasy football lineups.
            </CardText>
            <CardActions border>
              <div className='github'>
                <Button colored>
                  <a
                    href='https://github.com/nathantbissell/roto-react'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Github
                  </a>
                </Button>
                <Button colored>
                  <a
                    href='https://nathantbissell.github.io/roto-react'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Live Site
                  </a>
                </Button>
              </div>
            </CardActions>
          </Card>
        </div>
      )
    } else if (this.state.activeTab === 1) {
      return (
        <div className='project-grid'>
          <Card shadow={5} className='card'>
            <CardTitle
              className='title'
              style={{
                background:
                  'url(https://nathantbissell.github.io/OldPortfolio/img/sneakerspot.JPG) center / cover'
              }}
            />
            <CardText>
              Built with Javascript, Jquery, and Handlebars on the frontend with
              a Ruby on Rails backend.
            </CardText>
            <CardActions border>
              <div className='github'>
                <Button colored>
                  <a
                    href='https://github.com/nathantbissell/full-stack-project-client'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Github
                  </a>
                </Button>
                <Button colored>
                  <a
                    href='https://nathantbissell.github.io/full-stack-project-client'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Live Site
                  </a>
                </Button>
              </div>
            </CardActions>
          </Card>
          {/* // Project 2 */}
          <Card shadow={5} className='card'>
            <CardTitle
              className='title'
              style={{
                background:
                  'url(https://nathantbissell.github.io/OldPortfolio/img/foodsens.JPG) center / cover'
              }}
            />
            <CardText>A restaurant rating app</CardText>
            <CardActions border>
              <div className='github'>
                <Button colored>
                  <a
                    href='https://github.com/pvd-04-team-02'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Github
                  </a>
                </Button>
                <Button colored>
                  <a
                    href='https://pvd-04-team-02.github.io/pley-with-your-food-client/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Live Site
                  </a>
                </Button>
              </div>
            </CardActions>
          </Card>
          {/* // Project 3 */}
          <Card shadow={5} className='card'>
            <CardTitle
              className='title'
              style={{
                background:
                  'url(https://nathantbissell.github.io/OldPortfolio/img/tictactoe.JPG) center / cover'
              }}
            />
            <CardText>A TicTacToe game</CardText>
            <CardActions border>
              <div className='github'>
                <Button colored>
                  <a
                    href='https://github.com/nathantbissell/tictactoe-client'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Github
                  </a>
                </Button>
                <Button colored>
                  <a
                    href='https://nathantbissell.github.io/tictactoe-client/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Live Site
                  </a>
                </Button>
              </div>
            </CardActions>
          </Card>
        </div>
      )
    } else if (this.state.activeTab === 2) {
      return (
        <div className='project-grid'>
          <Card shadow={5} className='card'>
            <CardTitle
              className='title'
              style={{
                background:
                  'url(https://i.imgur.com/jPkSyX8.jpg) center / cover'
              }}
            />
            <CardText>
              Old Portfolio made with Bootstrap template and Javascript.
            </CardText>
            <CardActions border>
              <div className='github'>
                <Button colored>
                  <a
                    href='https://github.com/nathantbissell/OldPortfolio'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Github
                  </a>
                </Button>
                <Button colored>
                  <a
                    href='https://nathantbissell.github.io/OldPortfolio/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Live Site
                  </a>
                </Button>
              </div>
            </CardActions>
          </Card>
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
          <Tab>General Assembly</Tab>
          <Tab>Misc</Tab>
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
