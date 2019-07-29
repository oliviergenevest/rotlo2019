import React from 'react'
/*import { Link } from 'gatsby'*/
import Layout from '../components/layout'
import Container from '../components/Container/Container'
import SEO from '../components/seo'
/*import styles from './biography.module.scss'*/
const InfosPratiques = () => (
  <Layout>
    <SEO 
      title="Infos pratiques" 
      keywords={[`festival`, `rock on the l'oule`, `la motte chalancon`,`rock`,`musique`,`spectacle`,`concert`]}
      description="Le Festival Rock on the l'Oule, c'est des concerts, des spectacles, des jeux en bois, des produits locaux et buvette, une démarche éco-responsable, un espace bivouac."
    />

 <Container text first>
    
    <h1>Infos pratiques</h1>
    
    <h2>Billetterie</h2>
     <p>La billetterie se fait uniquement sur place à partir de 18h30</p>
     <p>Tarif : 15 € - 12 € (tarif réduit)</p>
    <h2>Se loger</h2>
    <p>Un espace est aménagé sur le site du Pas des Ondes, pour planter vos tentes. Le bivouac y est autorisé le soir du festival.</p>
    <p>Vous trouverez également la liste complète des hébergements (campings, chambres d'hôtes, hôtels, hébergements insolites..) sur le site de l'Office de Tourisme de La Motte Chalancon : <a href="http://www.lamottechalancon-tourisme.com/ou-dormir/language/fr.html">Office de Tourisme de La Motte Chalancon</a></p>
    
   <h2>Se nourrir</h2>
    <p>Restauration et buvette sur le site du festival : bière locale, picodon, pain bio, jus de fruits artisanaux, saucisses, plat chaud... La buvette et le snack privilégient les circuits courts et les produits de qualité. Une occasion de découvrir ou redécouvrir la variété des richesses régionales.</p>

     <h2>Comment venir ?</h2>
    <p>Plan d'eau du Pas des Ondes<br/>
    Adresse : D61, 26510 Cornillon-sur-l'Oule</p>
    <p>Pensez également au covoiturage ! </p>

    <h2>Infos</h2>
    <p>04 75 27 24 67</p>

     <h2>Devenir bénévole</h2>
    <iframe src="https://framaforms.org/rock-on-the-loule-25-inscription-benevoles-1556698674" width="100%" height="800" border="0" ></iframe>


</Container>
  </Layout>
)

export default InfosPratiques
