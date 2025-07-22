import React from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Container from '../components/Container/Container'
import {Seo} from '../components/seo'
/*import styles from './biography.module.scss'*/
const InfosPratiques = ({data}) => (
  <Layout>
   

 <Container text first>
    
    <h1>Infos pratiques</h1>
  
    <h2>Billetterie</h2>
     <p>Nous vous recommandons de réserver votre place via notre <Link to="../billetterie">billetterie en ligne</Link>. <b>Attention jauge limitée à 300 places</b>. <br/> Une billetterie physique sera également disponible le soir même sur place.
     </p>
     <p>Tarifs : 5€ (enfants de moins de 12ans), 10€ prix mini, 15€ prix conscient</p>
    <h2>Se loger</h2>
    <p>Un espace bivouac sera disponible le soir du concert. Vous trouverez la liste complète des hébergements (campings, chambres d'hôtes, hôtels, hébergements insolites..) sur le site de l'Office de Tourisme de La Motte Chalancon : <a href="http://www.lamottechalancon-tourisme.com/ou-dormir/language/fr.html" target="_blank" rel="noreferrer noopener">Office de Tourisme de La Motte Chalancon</a></p>
    
   <h2>Se nourrir</h2>
   <p>Restauration et buvette sur le site du festival : bière locale, pain bio, jus de fruits artisanaux, saucisses, plat chaud... La buvette et le snack privilégient les circuits courts et les produits de qualité. Une occasion de découvrir ou redécouvrir la variété des richesses régionales.</p>

  <h2>Bénévoles</h2>
  <p>Après 3 ans de vide, nous voilà repartis pour une nouvelle aventure. 
Et évidemment, pour mener à bien cette soirée, nous avons besoin de bénévoles pour faire tourner toute cette belle soirée!!
Alors voici le lien pour t'inscrire si tu souhaites rejoindre l'équipe une fois de plus, c'est par ici :&nbsp;
  <a href="mailto:benevolesrockontheloule@gmail.com"
rel="noreferrer noopener" target="blank">benevolesrockontheloule@gmail.com</a>
</p>

  <h2>Comment venir ?</h2>
    <p> Adresse : <br/>
   410, chemin du Chamousset, <br/> 26510 Cornillon sur l'Oule</p>
{/* 
  <GatsbyImage image={data.plan.childImageSharp.gatsbyImageData} alt="plan d'accès" style={{'maxWidth':'410px'}}/>
*/}
   

  {/*    <h2>Devenir bénévole</h2>
    <iframe src="https://framaforms.org/rock-on-the-loule-25-inscription-benevoles-1556698674" width="100%" height="800" border="0" ></iframe>
*/}

</Container>
  </Layout>
)

export default InfosPratiques

// TODO : utiliser les props de la page en parametre du composant Seo pour recuperer les infos de datocms
export const Head = () => (
  <Seo title="Infos pratiques - Festival Le Champ des Ondes 2025" 
  description="Le Festival Le Champ des Ondes, c'est des concerts, des jeux en bois, des produits locaux et buvette, une démarche éco-responsable."
/>
)

export const query = graphql`
  query {
    flyer: file(relativePath: { eq: "champdesondes.png" }) {
          childImageSharp {
            gatsbyImageData(width:600)
          
          }  
    }
    plan: file(relativePath: { eq: "plan acces.png" }) {
      childImageSharp {
        gatsbyImageData(width:410)
          
          }
    }
  }
`