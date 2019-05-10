import React from 'react'
/*import { Link } from 'gatsby'*/
import Layout from '../components/layout'
import Container from '../components/Container/Container'
import SEO from '../components/seo'
/*import styles from './biography.module.scss'*/
const Credits = () => (
  <Layout>
    <SEO title="Credits" keywords={[`festival`, `rock on the l'oule`, `la motte chalancon`,`rock`,`musique`,`spectacle`,`concert`]} />

 <Container text first>
    
    <h1>Credits</h1>
    
    <h2>Site internet</h2>
    <p><a href="https://oliviergenevest.info" target="_blank" rel="noopener noreferrer" >Olivier Genevest</a></p>
    
    <h2>Photos</h2>
    <p><a href="http://lafabegrafik.com/" target="_blank" rel="noopener noreferrer" >Fabienne Chemin</a>, Claude Mery, <a href="http://www.eric-roset.ch/" target="_blank" rel="noopener noreferrer" >Eric Roset</a></p>



</Container>
  </Layout>
)

export default Credits
