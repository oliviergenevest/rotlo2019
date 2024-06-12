import React from 'react'
/*import { Link } from 'gatsby'*/
import Layout from '../components/layout'
import Container from '../components/Container/Container'
import SEO from '../components/seo'
/*import styles from './biography.module.scss'*/
const BilletteriePage = () => (
  <Layout>
    <SEO 
    title="Association Rock on the l'Oule" 
    keywords={[`festival`, `rock on the l'oule`, `la motte chalancon`,`rock`,`musique`,`spectacle`,`concert`]}
    description="Achetez vos billets en ligne pour le festival 'Les hi
    Parenthèses de l'Oule' 3 et 4 août 2021 à la Motte Chalancon (26)"
    />

 <Container text first>
    
    <h1>Billetterie</h1>
    <p >Infos & renseignements : 07 64 79 23 59</p>
    <iframe title="billetteriehelloasso" id="haWidget" allowtransparency="true" scrolling="auto" src="https://www.helloasso.com/associations/association-rock-on-the-l-oule/evenements/festival-rock-on-the-l-oule/widget" style={{width: "100%", height: "750px", border:"none"}} onload="window.scroll(0, this.offsetTop)"></iframe>
 

</Container>
  </Layout>
)

export default BilletteriePage




