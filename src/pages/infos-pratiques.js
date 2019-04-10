import React from 'react'
/*import { Link } from 'gatsby'*/
import Layout from '../components/layout'
import Container from '../components/Container/Container'
import SEO from '../components/seo'
/*import styles from './biography.module.scss'*/
const InfosPratiques = () => (
  <Layout>
    <SEO title="Infos pratiques" keywords={[`festival`, `rock on the l'oule`, `la motte chalancon`,`rock`,`musique`,`spectacle`,`concert`]}/>

 <Container text first>
    
    <h1>Infos pratiques</h1>
    
    <h2>Se loger</h2>
    <p>Un espace est aménagé sur le site du Pas des Ondes, pour planter vos tentes. Le bivouac y est autorisé le soir du festival.</p>
    <p>Vous trouverez également la liste complète des hébergements (campings, chambres d'hôtes, hôtels, hébergements insolites..) sur le site de l'Office de Tourisme de La Motte Chalancon : <a href="http://www.lamottechalancon-tourisme.com/ou-dormir/language/fr.html">Office de Tourisme de La Motte Chalancon</a></p>
    
   <h2>Se nourrir</h2>
    <p>Restauration et buvette sur le site du festival : bière locale, picodon, pain bio, jus de fruits artisanaux, saucisses, plat chaud... La buvette et le snack privilégient les circuits courts et les produits de qualité. Une occasion de découvrir ou redécouvrir la variété des richesses régionales.</p>

     <h2>Comment venir ?</h2>
    <p>Plan d'eau du Pas des Ondes<br/>
    Adresse : D61, 26510 Cornillon-sur-l'Oule</p>
    <p>Pensez également au covoiturage ! </p>

     <h2>Devenir bénévole</h2>
    <p>prochainement</p>


</Container>
  </Layout>
)

export default InfosPratiques
