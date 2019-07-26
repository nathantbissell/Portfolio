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
              My journey as a programmer began as a Sophomore in College. Having
              been a declared Nursing major for three semesters with a
              concentration in anesthesiology, I reached a point that most
              college undergraduates experience. A period of self reflecting and
              understanding ensued. My true calling had always been engineering,
              building, working with computers, or solving problems under
              constrained circumstances. I declared as a Computer Science major,
              and attained my Bachelors Degree in 2017.
              <br />
              <br />
              While majoring in CS full time, I was employed full time at a
              restaurant located on Federal Hill. I worked my way up from
              bussing tables to a full time server for the last four years.
              Another period of self reflection came while I was working at CVS
              Corporate Headquarters, where I was diagnosing issues and
              dispatching them to Desktop Support Teams. Although I liked the
              job, I started looking for boot camps and developer jobs. That's
              when I stumbled upon General Assembly, quit my job, and
              participated in the full time <i>
                Web Development Immersive
              </i>{' '}
              program in 2019.
            </p>
            <hr className='resume-left-border' />
            <h5>Address</h5>
            <p>203 Pray Hill Road Chepachet RI 02814</p>
            <h5>Phone</h5>
            <p>(401) 556-2161</p>
            <h5>Email</h5>
            <p>natebissmadethis@gmail.com</p>
            {/* <h5>Web</h5> */}
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
              website='http://ric.smartcatalogiq.com/en/2018-2019/Catalog/Faculty-of-Arts-and-Sciences/Computer-Science/Computer-Science-B-A'
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
              jobDescription={[
                'Voted “Best Restaurant” Rhode Island Monthly Readers Poll 2013, 2014, 2015, 2017',
                'Expected to have an extensive understanding of menu items, their specific ingredients, and styles of preparation, primarily for dietary accommodations and preferences',
                'Memorization and confident presentation of upwards of seven daily specials, flavor profiles, and articulation in an appetizing manner'
              ]}
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
              website='https://www.whitepages.com/business/RI/Cumberland/Cvs/b-1a69u1g'
            />
            {/* <hr className='resume-right-border' />
            <h2>Skills</h2>
            <Skills skill='javascript' progress={100} />
            <Skills skill='HTML/CSS' progress={80} />
            <Skills skill='NodeJS' progress={50} />
            <Skills skill='React' progress={25} /> */}
          </Cell>
        </Grid>
      </div>
    )
  }
}
export default Resume
