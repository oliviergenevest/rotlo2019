import React from 'react'
/*import { Link } from 'gatsby'*/
import Img from 'gatsby-image'
import Layout from '../components/layout'
import Container from '../components/Container/Container'
import SEO from '../components/seo'
import Card from '../components/card/card'
import GridFlex from '../components/Grid/GridFlex'
import { graphql } from 'gatsby'
import { FaFacebook } from 'react-icons/fa'
import config from '../config/SiteConfig'

const Contacts = () => {

 return  ( <Layout> 
    <SEO title="Contacts" keywords={[`gatsby`, `application`, `react`]} />
    <Container text first>   
        <h1>Contacts</h1> 
        <h2>Email</h2>
        <p><a href="mailto:contact@rockontheloule.org">contact@rockontheloule.org</a></p>
        <h2>Postal</h2>
        <p>Association Rock On the l'Oule
        <br/>Le Village
        <br/>26470 La Motte Chalancon</p>
        <h2>Facebook</h2>
        <p>
            <a href={config.facebookPageUrl} aria-label="Facebook" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={40} style={{color:"white" }}  />
            </a>
        </p>
    </Container>
  </Layout>
)
}

export default Contacts