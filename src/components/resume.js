import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'
import Education from './education'
import Experience from './experience'
import Skills from './skills'

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div className='resume-avatar'>
              <img
                src='https://instagram.fzty1-1.fna.fbcdn.net/vp/d9d4bd1da97d86d122c66a5cd08ac202/5DA04B46/t51.2885-15/e35/s1080x1080/61411213_624638718050145_2295410649549424989_n.jpg?_nc_ht=instagram.fzty1-1.fna.fbcdn.net'
                alt='avatar'
              />
            </div>

            <h2 className='resume-name'>Nathan Bissell</h2>
            <h4 className='resume-objective'>Programmer</h4>
            <hr className='resume-left-border' />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <hr className='resume-left-border' />
            <h5>Address</h5>
            <p>203 Pray Hill Road Chepachet RI 02814</p>
            <h5>Phone</h5>
            <p>(401) 556-2161</p>
            <h5>Email</h5>
            <p>natebissmadethis@gmail.com</p>
            <h5>Web</h5>
            {/* <p>mywebsite.com</p> */}
            <hr className='resume-left-border' />
          </Cell>
          <Cell className='resume-right-col' col={8}>
            <h2>Education</h2>
            <Education
              startYear={2012}
              endYear={2017}
              schoolName='Rhode Island College'
              degree='Bachelors of Arts'
              schoolDescription='Undergrad degree in Object Oriented Programming primarily taught with a focus in Java & Python'
              topics={[
                'Software Engineering',
                'Analysis of Algorithms',
                'Functional Programming',
                'Database Systems',
                'Computer Architecture',
                'Organization of Programming Languages',
                'Cryptography',
                'Statistical Methods',
                'Discrete Mathematics'
              ]}
            />

            <Education
              startYear={2018}
              endYear={2019}
              schoolName='General Assembly'
              degree='Software Engineering Immersive'
              schoolDescription='Completion of a 500 hour, coding boot camp with experience in algorithms, data structures, design patterns, APIs, and real world problems.'
              topics={[
                'HTML',
                'CSS',
                'JavaScript',
                'Express',
                'Bootstrap && Handlebars',
                'Ruby on Rails',
                'React'
              ]}
              website='https://generalassemb.ly/education/software-engineering-immersive-remote-flex/providence'
            />

            <hr className='resume-right-border' />
            <h2>Experience</h2>
            <Experience
              startYear={2013}
              endYear={2019}
              jobName='Siena Inc.'
              jobDescription={[]}
              website='https://sienari.com/'
            />
            <Experience
              startYear={2012}
              endYear={2016}
              jobName='CVS - Information Technology Service Technician'
              jobDescription={[
                'Diagnosed and categorized 40-60 issues daily',
                'First point of escalation for all IT related inquiries supporting employees, contractors, and clients of CVS Health',
                'Cooperating with development teams on bridges to fix problems with urgent priority',
                'Experience with SalesForce, Unix / Putty, Active Directory, SQL Server, Citrix, MS Office Suite, Cisco Anyconnect, Printer and VPN Support issues'
              ]}
            />
            <hr className='resume-right-border' />
            <h2>Skills</h2>
            <Skills skill='javascript' progress={100} />
            <Skills skill='HTML/CSS' progress={80} />
            <Skills skill='NodeJS' progress={50} />
            <Skills skill='React' progress={25} />
          </Cell>
        </Grid>
      </div>
    )
  }
}
export default Resume
