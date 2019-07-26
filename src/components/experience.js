import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'

class Experience extends Component {
  render() {
    return (
      <Grid>
        <Cell col={4}>
          <p>
            {this.props.startYear} - {this.props.endYear}
          </p>
        </Cell>
        <Cell col={8}>
          <h4 style={{ marginTop: '0px' }}>{this.props.jobName}</h4>
          <a href={this.props.website} target='_blank'>
            more info
          </a>
          <p>
            {this.props.jobDescription.map(job => (
              <li>{job}</li>
            ))}
          </p>
        </Cell>
      </Grid>
    )
  }
}

export default Experience
