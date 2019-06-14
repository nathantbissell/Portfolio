import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'

class Landing extends Component {
  render() {
    return (
      <div style={{ width: '100%', margin: 'auto' }}>
        <Grid className='landing-grid'>
          <Cell col={12}>
            <img
              src='http://pgbxproducts.pregel2.com/media/catalog/product/cache/10/image/1500x/9df78eab33525d08d6e5fb8d27136e95/p/l/plasmon.png'
              alt='avatar'
              className='avatar-img'
            />
            <div className='banner-text'>
              <h1>Full Stack Web Developer</h1>

              <hr />
              <p>HTML | CSS | React | Express | MongoDB | Express</p>
              <div className='social-links'>
                <a href='http://google.com' target='_blank'>
                  <i className='fab fa-instagram' />
                </a>
                <a href='http://google.com' target='_blank'>
                  <i className='fab fa-linkedin' />
                </a>
                <a href='http://google.com' target='_blank'>
                  <i className='fab fa-github' />
                </a>
                <a href='http://google.com' target='_blank'>
                  <i className='fas fa-inbox' />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}
export default Landing
