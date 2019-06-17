import React, { Component } from 'react'
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl'

export default class contact extends Component {
  render() {
    return (
      <div className='contact-body'>
        <Grid className='contact-grid'>
          <Cell col={6}>
            <h1>Nathan Bissell</h1>
            <img
              src='https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png'
              alt='avatar'
              style={{ height: '250px' }}
            />
            <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>
              Board Man Gets Paid I just think I'm a really fun
              guyyyyyyyyyyyyyyyyyy hwaaa haaaa hwaa hwaa haa haa ha ha ha haaa
              Board Man Gets Paid, Board Man Gets Paid, Board Man Gets PaidBoard
              Man Gets Paid I just think I'm a really fun guyyyyyyyyyyyyyyyyyy
              hwaaa haaaa hwaa hwaa haa haa ha ha ha haaa Board Man Gets Paid,
              Board Man Gets Paid, Board Man Gets Paid
            </p>
          </Cell>

          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />
            <div className='contact-list'>
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: '30px', fontFamily: 'Anton' }}
                  >
                    <i className='fas fa-phone-square' />
                    (401) 556-2161
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: '30px', fontFamily: 'Anton' }}
                  >
                    <i className='fas fa-phone-square' />
                    (401) 556-2161
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: '30px', fontFamily: 'Anton' }}
                  >
                    <i className='fas fa-phone-square' />
                    (401) 556-2161
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: '30px', fontFamily: 'Anton' }}
                  >
                    <i className='fas fa-phone-square' />
                    (401) 556-2161
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}
