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
     <p>La billetterie se fait uniquement en ligne</p>
     <p>Tarifs : 15 € - 12 € (tarif réduit)</p>
    <h2>Se loger</h2>
    <p>Vous trouverez également la liste complète des hébergements (campings, chambres d'hôtes, hôtels, hébergements insolites..) sur le site de l'Office de Tourisme de La Motte Chalancon : <a href="http://www.lamottechalancon-tourisme.com/ou-dormir/language/fr.html">Office de Tourisme de La Motte Chalancon</a></p>
    
   <h2>Se nourrir</h2>
    <p>Restauration et buvette sur le site du festival : bière locale, picodon, pain bio, jus de fruits artisanaux, saucisses, plat chaud... La buvette et le snack privilégient les circuits courts et les produits de qualité. Une occasion de découvrir ou redécouvrir la variété des richesses régionales.</p>

     <h2>Comment venir ?</h2>
    <p>Place du Fort<br/>
    Adresse : 26470 La Motte Chalancon</p>
    <p>Pensez également au covoiturage ! </p>

    <h2>Infos</h2>
    <p>06 XX XX XX XX</p>

  {/*    <h2>Devenir bénévole</h2>
    <iframe src="https://framaforms.org/rock-on-the-loule-25-inscription-benevoles-1556698674" width="100%" height="800" border="0" ></iframe>
*/}

</Container>
  </Layout>
)

export default InfosPratiques
