import React from 'react'
/*import { Link } from 'gatsby'*/
import Layout from '../components/layout'
import Container from '../components/Container/Container'
import {Seo} from '../components/seo'
/*import styles from './biography.module.scss'*/
const BilletteriePage = () => (
  <Layout>
    

 <Container text first>
    
    <h1>Billetterie</h1>
    <p >Infos & renseignements : 04 75 27 24 67</p>
    <iframe title="billetteriehelloasso" id="haWidget" allowtransparency="true"  src="https://www.helloasso.com/associations/association-rock-on-the-l-oule/evenements/festival-rock-on-the-l-oule-2022/widget" style={{width: "100%", height: "750px", border:"none"}} /*onLoad={()=>window.scroll(0, this.offsetTop)}*/></iframe>
 

</Container>
  </Layout>
)

export default BilletteriePage

// TODO : utiliser les props de la page en parametre du composant Seo pour recuperer les infos de datocms
export const Head = () => (
	<Seo title="Programmation - Festival Rock on the l'Oule 2023" 
	description="Achetez vos billets en ligne pour le festival 'Rock on the l'Oule'"
  />
  )
  



