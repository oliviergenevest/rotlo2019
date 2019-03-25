import React from 'react'
/*import { Link } from 'gatsby'*/
import Layout from '../components/layout'
import Container from '../components/Container/Container'
import SEO from '../components/seo'
/*import styles from './biography.module.scss'*/
const Contacts = () => (
  <Layout>
    <SEO title="Contacts" keywords={[`gatsby`, `application`, `react`]} />

 <Container text first>
    
    <h1>Contacts</h1>
    
    <h2>Email</h2>
    <p><a href="mailto:rockontheloule@gmail.com">rockontheloule@gmail.com</a></p>
    
    <h2>Postal</h2>
    <p>Association Rock On the l'Oule
    <br/>Le Village
    <br/>26470 La Motte Chalancon</p>



</Container>
  </Layout>
)

export default Contacts
