import React from "react" 
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"

const Index = ({ data }) => {
  const {
    site: {
      siteMetadata: { name, role },
    },
  } = data;
  return (
    <>
        <Layout>
            <h1>This is the index page.</h1>
            <p>
                <Link to="/projects">Projects</Link><br/>
        </p>
        <p>Resume</p>
        <p>Technologies</p>
        <p>Projects</p>
        <p>Contact</p>
        <p>Technologies</p>
          <ul>
            <li>
              <p>PHP</p>
              <p>Frameworks</p>
              <ul>
                <li>Symfony</li>
                <li>Laravel</li>
                <li>Codeignitor</li>
                <li>CakePHP</li>
                <li>WordPress</li>
              </ul>
            </li>
            <li>
              <p>Javascript</p>
              <p>Frameworks/Libraries</p>
              <ul>
                <li>Angular</li>
                <li>React</li>
                <li>JQuery</li>
                <li>Node</li>
                <li>Redux</li>
                <li>Gatsby</li>
                <li>Johnny 5</li>
                <li>VueJs</li>
                <li>Mustache</li>
              </ul>
            </li>
            <li>
              <p>CSS</p>
              <p>Frameworks/Libraries</p>
              <ul>
                <li>Bootstrap</li>
                <li>Landing Page Design</li>
                <li>Email Marketing</li>
              </ul>
            </li>
            <li>
              <p>Server Technologies</p>
              <ul>
                <li>Apache</li>
                <li>Nginx</li>
                <li>NodeJs</li>
                <li>AWS Elastic Beanstalk</li>
                <li>Buckets</li>
                <li>Jenkins</li>
                <li>Docker</li>
                <li>Ubuntu</li>
              </ul>
            </li>
            <li>
              <p>Databases</p>
              <ul>
                <li>MySQL</li>
                <li>MSSql</li>
                <li>Firebase</li>
              </ul>
            </li>
            <li>Python</li>
          </ul>
      </Layout>
    </>
  )
}

export const query = graphql`
  {
    site {
      siteMetadata {
        name
        role
      }
    }
  }
  `

export default Index
