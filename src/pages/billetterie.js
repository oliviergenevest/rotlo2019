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
  <p >Nous vous recommandons de réserver votre place via notre billetterie en ligne. <br/>
  <b> Attention jauge limitée à 300 places.</b><br/> Une billetterie physique sera également disponible le soir même sur place.</p>
  <p>Tarifs : 5€ (enfants de moins de 12ans), 10€ prix mini, 15€ prix conscient</p>
  <iframe title="billetteriehelloasso" id="haWidget" allowtransparency="true"  src="https://www.helloasso.com/associations/association-rock-on-the-l-oule/evenements/le-champ-des-ondes/widget" style={{width: "100%", height: "750px", border:"none"}} /*onLoad={()=>window.scroll(0, this.offsetTop)}*/></iframe>

</Container>
  </Layout>
)

export default BilletteriePage

// TODO : utiliser les props de la page en parametre du composant Seo pour recuperer les infos de datocms
export const Head = () => (
	<Seo title="Programmation - Festival Le Champ des Ondes" 
	description="Achetez vos billets en ligne pour le festival 'Le Champ des Ondes'"
  />
  )
  



