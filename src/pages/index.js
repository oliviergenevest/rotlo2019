import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import Container from '../components/Container/Container'
import { StaticQuery, graphql } from 'gatsby'
import SEO from '../components/seo'
import Grid1 from '../components/Grid/Grid1'
/*import TimelineProg from '../components/timeline'*/

const ImageHomepageSection1 = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "rotlo-hp.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1600, quality:80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={ data => <Img 
    fluid={data.placeholderImage.childImageSharp.fluid} />}
  />
)




const IndexPage = () => {
 
   return (
      <Layout >
          <SEO title="Accueil" keywords={[`solutions numériques`, `website`, `react`]} />
          <Grid1 
            image = { <ImageHomepageSection1 /> } 
            heroText = {{text:'Rock on the l\'Oule'}} 
           text1= {{text:'Festival'}} 
           /*text3= {{text:"C'est au Pas des Ondes que ça se passe ! Entre montagnes et plans d'eau, Rock on the l'Oule fêtera sa 25ème édition. Au programme : concerts, cirque, détente, jeux en bois, produits locaux et buvette, démarche éco-responsable. On compte sur vous !"}} */
          />

          {/*<TimelineProg/>*/}
          <Container text first> 
          
          <h2>Un lieu magique : le site du Pas des Ondes.</h2>
          <p>


Deux plans d’eau posés au coeur des montagnes préalpines, à la frontière entre Diois et Baronnies. Un oasis dominé par les ruines du château médiéval de Cornillon et survolé par les hérons, vautours et autres spécimens de la faune locale. Un joyeux brassage de cultures.</p>

 <p>
Dans une ambiance familiale rappelant les fêtes de village traditionnelles, Rock on the l’Oule propose une programmation artistique de premier choix faisant la part belle au métissage. Une rencontre entre les genres musicaux les plus variés et des artistes aux origines géographiques multiples. Mais aussi du cirque, des performances en tous genres, des jeux en bois, un salon de thé sous tentes berbères... De quoi rassembler toutes les générations de public et faire se rencontrer les cultures. </p>


<h2>Un festival durable et responsable.</h2>

 <p>
Bière locale, picodon, pain bio, jus de fruits artisanaux, saucisses, plat chaud... La buvette et le snack privilégient les circuits courts et les produits de qualité. Une occasion de découvrir ou redécouvrir la variété des richesses régionales. Par ailleurs, une attention particulière est accordée par l’organisation à la préservation du site et au respect de l’environnement : étude d’impact, tri des déchets, toilettes sèches, gobelets réutilisables... Enfin, un réel souci anime les organisateurs pour rendre la manifestation accessible au plus grand nombre. Cela se traduit notamment par la recherche de tarifs raisonnables et adaptés. </p>


<h2>Une aventure humaine et collective qui dure depuis... 25 ans.</h2>

 <p>
Fait rare pour un festival qui dure depuis plus de vingt ans, son organisation est toujours le fait d’une équipe 100 % bénévole. Une bande de passionnés, attachée à la région, qui a su rassembler des énergies multiples et fidèles autour de ce projet au long cours. Aujourd’hui, ce sont près de 70 bénévoles et le soutien de nombreux habitants, associations et entreprises de la région qui permettent à cette aventure de se poursuivre.</p>
        
          </Container>
          <Container text>
            <h2>Grand Bureau</h2>
            <p>Rock On The l’Oule fait parti du Grand Bureau. Grand Bureau est un réseau né de la fusion de la FEPPRA, du GRADA, du GRAL et de Tagada Tsoin Tsoin. Lancé officiellement fin janvier 2017, il coordonne une nouvelle dynamique de coopération entre les acteurs de la filière musiques actuelles. Grand Bureau est le réseau des acteurs musiques actuelles en Auvergne-Rhône-Alpes. Il regroupe à ce jour plus de 160 structures membres de l’ensemble de la filière des musiques actuelles, et leur donne un cadre de coopération.</p>
            <p><a target="_blank" rel="noopener noreferrer" href="http://grandbureau.fr/">http://grandbureau.fr/</a></p>
           

          </Container>
      </Layout>
)
}

export default IndexPage