import React from 'react'
/*import { Link } from 'gatsby'*/
import Layout from '../components/layout'
import Container from '../components/Container/Container'
import SEO from '../components/seo'
/*import styles from './biography.module.scss'*/
const BilletteriePage = () => (
  <Layout>
    <SEO 
    title="L'association Rock on the l'Oule" 
    keywords={[`festival`, `rock on the l'oule`, `la motte chalancon`,`rock`,`musique`,`spectacle`,`concert`]}
    description="Association régie par la loi 1901, le Foyer des jeunes de la Motte Chalancon fut créé en 1994 dans le but de rassembler les jeunes villageois de la Motte Chalancon et des environs et de leur offrir un moyen de s’investir dans la vie locale et l’animation du village." 
    />

 <Container text first>
    
    <h1>Billetterie</h1>
    <iframe id="haWidget" allowtransparency="true" scrolling="auto" src="https://www.helloasso.com/associations/association-rock-on-the-l-oule/evenements/festival-rock-on-the-l-oule/widget" style={{width: "100%", height: "750px", border:"none"}} onload="window.scroll(0, this.offsetTop)"></iframe>
 

</Container>
  </Layout>
)

export default BilletteriePage




