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
      description="Le Festival Rock on the l'Oule, c'est des concerts, une exposition, des jeux en bois, des produits locaux et buvette, une démarche éco-responsable."
    />

 <Container text first>
    
    <h1>Infos pratiques</h1>
    
    <h2>Billetterie</h2>
     <p>La billetterie se fait uniquement en ligne (places limitées) : <a href="https://www.helloasso.com/associations/association-rock-on-the-l-oule/evenements/festival-rock-on-the-l-oule" target="_blank" rel="noreferrer noopener">Réserver</a>
     </p>
     <p>Tarifs : 18 € - 12 € (tarif réduit)</p>
    <h2>Se loger</h2>
    <p>Attention, nous tenons à vous informer qu'il n'y aura pas d'espace bivouac cette année. </p>
    <p>Vous trouverez la liste complète des hébergements (campings, chambres d'hôtes, hôtels, hébergements insolites..) sur le site de l'Office de Tourisme de La Motte Chalancon : <a href="http://www.lamottechalancon-tourisme.com/ou-dormir/language/fr.html" target="_blank" rel="noreferrer noopener">Office de Tourisme de La Motte Chalancon</a></p>
    
   <h2>Se nourrir</h2>
   <p>Nouveauté : Nous proposons cette année un repas complet (entrée + plat + dessert + 1 verre de vin).
      Réservation obligatoire via notre <a href="https://www.helloasso.com/associations/association-rock-on-the-l-oule/evenements/festival-rock-on-the-l-oule" target="_blank" rel="noreferrer noopener">billeterie en ligne</a>.</p>
    <p>Restauration et buvette sur le site du festival : bière locale, pain bio, jus de fruits artisanaux, saucisses, plat chaud... La buvette et le snack privilégient les circuits courts et les produits de qualité. Une occasion de découvrir ou redécouvrir la variété des richesses régionales.</p>

     <h2>Comment venir ?</h2>
    <p> Adresse : <br/>
    Place du Fort<br/> 26470 La Motte Chalancon</p>
    <p>Attention : Le stationnement dans le village est limité. Pensez également au covoiturage ! </p>

    <h2>Infos & renseignements</h2>
    <p>07 64 79 23 59</p>

  {/*    <h2>Devenir bénévole</h2>
    <iframe src="https://framaforms.org/rock-on-the-loule-25-inscription-benevoles-1556698674" width="100%" height="800" border="0" ></iframe>
*/}

</Container>
  </Layout>
)

export default InfosPratiques
