import React from 'react'
/*import { Link } from 'gatsby'*/
import Layout from '../components/layout'
import Container from '../components/Container/Container'
import {Seo} from '../components/seo'
/*import styles from './biography.module.scss'*/
const Credits = () => (
  <Layout>

 <Container text first>
    
    <h1>Credits</h1>
    
    <h2>Site internet</h2>
    <p><a href="https://oliviergenevest.info" target="_blank" rel="noopener noreferrer" >Olivier Genevest</a></p>
    
    <h2>Photos</h2>
    <p><a href="http://lafabegrafik.com/" target="_blank" rel="noopener noreferrer" >Fabienne Chemin</a>, Claude Mery, <a href="http://www.eric-roset.ch/" target="_blank" rel="noopener noreferrer" >Eric Roset</a>, Emmanuel Pampuri, Jeff Humbert, Cassandre Magagnini</p>



</Container>
  </Layout>
)

export default Credits



// TODO : utiliser les props de la page en parametre du composant Seo pour recuperer les infos de datocms
export const Head = () => (
	<Seo title="Crédits" 
  />
  )
  