import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'

class Education extends Component {
  render() {
    return (
      <Grid>
        <Cell col={4}>
          <p>
            {this.props.startYear} - {this.props.endYear}
          </p>
        </Cell>
        <Cell col={8}>
          <h3 style={{ marginTop: '0px' }}>{this.props.schoolName}</h3>
          <h5>{this.props.degree}</h5>
          <p>{this.props.schoolDescription}</p>
          <p>
            {this.props.topics.map(topic => (
              <li>{topic}</li>
            ))}
          </p>
        </Cell>
      </Grid>
    )
  }
}

export default Education
