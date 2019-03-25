import React from 'react'
/*import { Link } from 'gatsby'*/
import Layout from '../components/layout'
import Container from '../components/Container/Container'
import SEO from '../components/seo'
/*import styles from './biography.module.scss'*/
const InfosPratiques = () => (
  <Layout>
    <SEO title="Infos pratiques" keywords={[`gatsby`, `application`, `react`]} />

 <Container text first>
    
    <h1>Infos pratiques</h1>
    
    <h2>Se loger</h2>
    <p>prochainement</p>
    
   <h2>Se nourrir</h2>
    <p>prochainement</p>

     <h2>Comment venir ?</h2>
    <p>prochainement</p>

     <h2>Devenir bénévole</h2>
    <p>prochainement</p>


</Container>
  </Layout>
)

export default InfosPratiques
