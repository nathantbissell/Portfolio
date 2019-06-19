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
              src='https://instagram.fzty1-1.fna.fbcdn.net/vp/d9d4bd1da97d86d122c66a5cd08ac202/5DA04B46/t51.2885-15/e35/s1080x1080/61411213_624638718050145_2295410649549424989_n.jpg?_nc_ht=instagram.fzty1-1.fna.fbcdn.net'
              alt='avatar'
            />
            <p>26 year old.</p>
          </Cell>

          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />
            <div className='contact-list'>
              <List>
                <ListItem>
                  <ListItemContent className='contact-content'>
                    <i className='fas fa-phone-square' />
                    (401) 556-2161
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent className='contact-content inbox'>
                    <i className='fas fa-envelope-square' />
                    natebissmadethis@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent className='contact-content'>
                    <i className='fab fa-linkedin' />
                    <a href='https://www.linkedin.com/in/nathan-bissell/'>
                      linkedIn
                    </a>
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent className='contact-content'>
                    <i className='fab fa-github-square' />
                    <a href='https://github.com/nathantbissell'>github</a>
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
