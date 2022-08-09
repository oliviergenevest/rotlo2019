import React from 'react'
/*import { Link } from 'gatsby'*/
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Container from '../components/Container/Container'
import SEO from '../components/seo'
/*import styles from './biography.module.scss'*/
const InfosPratiques = ({data}) => (
  <Layout>
    <SEO 
      title="Infos pratiques" 
      keywords={[`festival`, `rock on the l'oule`, `la motte chalancon`,`rock`,`musique`,`spectacle`,`concert`]}
      description="Le Festival Rock on the l'Oule, c'est des concerts, des jeux en bois, des produits locaux et buvette, une démarche éco-responsable."
    />

 <Container text first>
    
    <h1>Infos pratiques</h1>
  
    <h2>Billetterie</h2>
     <p>Nous vous recommandons de réserver votre place via notre billetterie en ligne <br/><a href="https://www.helloasso.com/associations/association-rock-on-the-l-oule/evenements/festival-rock-on-the-l-oule-2022" target="_blank" rel="noreferrer noopener">Réserver dès maintenant</a>. Une billetterie physique sera également isponible le soir même sur place.
     </p>
     <p>Tarifs : 20 € - 15 € (tarif réduit) - Gratuit pour les moins de 12 ans</p>
    <h2>Se loger</h2>
    <p>Un espace bivouac sera disponible le soir du concert. Vous trouverez la liste complète des hébergements (campings, chambres d'hôtes, hôtels, hébergements insolites..) sur le site de l'Office de Tourisme de La Motte Chalancon : <a href="http://www.lamottechalancon-tourisme.com/ou-dormir/language/fr.html" target="_blank" rel="noreferrer noopener">Office de Tourisme de La Motte Chalancon</a></p>
    
   <h2>Se nourrir</h2>
   <p>Restauration et buvette sur le site du festival : bière locale, pain bio, jus de fruits artisanaux, saucisses, plat chaud... La buvette et le snack privilégient les circuits courts et les produits de qualité. Une occasion de découvrir ou redécouvrir la variété des richesses régionales.</p>

  <h2>Bénévoles</h2>
  <p>Après 2 ans de vide, nous voilà repartis pour une 26ème édition riche en émotions. 
Et évidemment, pour mener à bien cette soirée, nous avons besoin de bénévoles pour faire tourner toute cette belle soirée!!
Alors voici le lien pour t'inscrire si tu souhaites rejoindre l'équipe une fois de plus, c'est par ici :&nbsp;
  <a href="https://framaforms.org/inscriptions-benevoles-rock-on-the-loule-2022-1657456112"
  title="formulaire d'inscription bénévoles" rel="noreferrer noopener" target="blank">Formulaire d'inscription bénévoles</a>
</p>

  <h2>Comment venir ?</h2>
    <p> Adresse : <br/>
   Plan d'eau du Pas des Ondes, <br/> 26470 La Motte Chalancon</p>
   <Img fluid={data.plan.childImageSharp.fluid} alt="plan d'accès" style={{'maxWidth':'410px'}}/>

   

  {/*    <h2>Devenir bénévole</h2>
    <iframe src="https://framaforms.org/rock-on-the-loule-25-inscription-benevoles-1556698674" width="100%" height="800" border="0" ></iframe>
*/}

</Container>
  </Layout>
)

export default InfosPratiques

export const query = graphql`
  query {
    flyer: file(relativePath: { eq: "lesparenthesesdeloule.png" }) {
          childImageSharp {
            fluid(maxWidth: 600, quality:90) {
              ...GatsbyImageSharpFluid
        
            }
          }  
    }
    plan: file(relativePath: { eq: "plan acces.png" }) {
      childImageSharp {
            fluid(maxWidth: 410, quality:80) {
              ...GatsbyImageSharpFluid
            }
          }
    }
  }
`