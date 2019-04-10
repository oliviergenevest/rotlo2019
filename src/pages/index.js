import React from 'react'
//import { Link } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import Container from '../components/Container/Container'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import Grid1 from '../components/Grid/Grid1'
import Grid2 from '../components/Grid/Grid2'
/*import TimelineProg from '../components/timeline'*/
import RandomImage from '../components/RandomImage'

const IndexPage = ({data}) => {
   return (
      <Layout>
          <SEO title="Accueil" keywords={[`festival`, `rock on the l'oule`, `la motte chalancon`,`rock`,`musique`,`spectacle`,`concert`]} />
          <Grid1 
            image = { <RandomImage gatsbyImageArray={data.backgroundImages}/> } 
            flyer = {<Img fluid={data.flyer.childImageSharp.fluid} />}
            heroText = {{text:'Rock on the l\'Oule #25'}} 
            text1= {{text:'Mercredi 7 août - La Motte Chalancon'}} 
            text3= {{text:"C'est au Pas des Ondes que ça se passe ! Entre montagnes et plans d'eau, Rock on the l'Oule fêtera sa 25ème édition. Au programme : concerts, cirque, détente, jeux en bois, produits locaux et buvette, démarche éco-responsable. On compte sur vous !"}} 
          />

          {/*<TimelineProg/>*/}
          
          
          
        <Container fluid > 
          <Grid2 
            text={{text:" Deux plans d’eau posés au coeur des montagnes préalpines, à la frontière entre Diois et Baronnies. Un oasis dominé par les ruines du château médiéval de Cornillon et survolé par les hérons, vautours et autres spécimens de la faune locale. Un joyeux brassage de cultures. Dans une ambiance familiale rappelant les fêtes de village traditionnelles, Rock on the l’Oule propose une programmation artistique de premier choix faisant la part belle au métissage. Une rencontre entre les genres musicaux les plus variés et des artistes aux origines géographiques multiples. Mais aussi du cirque, des performances en tous genres, des jeux en bois, un salon de thé sous tentes berbères... De quoi rassembler toutes les générations de public et faire se rencontrer les cultures."}}
              image={<Img fluid={data.siteExceptionnel.childImageSharp.fluid} />}
              title=" Un lieu magique : le site du Pas des Ondes."
            />

              <Grid2 
                text={{text:"Bière locale, picodon, pain bio, jus de fruits artisanaux, saucisses, plat chaud... La buvette et le snack privilégient les circuits courts et les produits de qualité. Une occasion de découvrir ou redécouvrir la variété des richesses régionales. Par ailleurs, une attention particulière est accordée par l’organisation à la préservation du site et au respect de l’environnement : étude d’impact, tri des déchets, toilettes sèches, gobelets réutilisables... Enfin, un réel souci anime les organisateurs pour rendre la manifestation accessible au plus grand nombre. Cela se traduit notamment par la recherche de tarifs raisonnables et adaptés."}}
                image={<Img fluid={data.environnement.childImageSharp.fluid} />}
                title="Un festival durable et responsable."
                reverse
            />

             <Grid2 
                text={{text:"Fait rare pour un festival qui dure depuis plus de vingt ans, son organisation est toujours le fait d’une équipe 100 % bénévole. Une bande de passionnés, attachée à la région, qui a su rassembler des énergies multiples et fidèles autour de ce projet au long cours. Aujourd’hui, ce sont près de 70 bénévoles et le soutien de nombreux habitants, associations et entreprises de la région qui permettent à cette aventure de se poursuivre."}}
                image={<Img fluid={data.benevoles.childImageSharp.fluid} />}
                title="Une aventure humaine et collective qui dure depuis... 25 ans."
                
            />
          </Container> 
            <Container grandBureau>
              <Img fixed={data.logoGrandBureau.childImageSharp.fixed} style={{maxWidth: '200px',marginBottom:'2rem'}}/>
              <p>Rock On The l’Oule fait parti du Grand Bureau. Grand Bureau est un réseau né de la fusion de la FEPPRA, du GRADA, du GRAL et de Tagada Tsoin Tsoin. Lancé officiellement fin janvier 2017, il coordonne une nouvelle dynamique de coopération entre les acteurs de la filière musiques actuelles. Grand Bureau est le réseau des acteurs musiques actuelles en Auvergne-Rhône-Alpes. Il regroupe à ce jour plus de 160 structures membres de l’ensemble de la filière des musiques actuelles, et leur donne un cadre de coopération.</p>
              <p><a target="_blank" rel="noopener noreferrer" href="http://grandbureau.fr/">http://grandbureau.fr/</a></p>  
          </Container>
         
      </Layout>
)
}

export default IndexPage

export const query = graphql`
  query {

    backgroundImages: allFile (filter:{relativeDirectory:{eq:"backgrounds"}, extension:{eq:"jpg"}}){
    edges {
      node {
          childImageSharp {
            fluid(maxWidth: 1600, quality:80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }

    placeholderImage: file(relativePath: { eq: "site.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1600, quality:80) {
              ...GatsbyImageSharpFluid
            }
          }
    }

    flyer: file(relativePath: { eq: "aff-rotlo-2018.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 400, quality:80) {
              ...GatsbyImageSharpFluid
            }
          }
    }

    logoGrandBureau: file(relativePath: { eq: "grand-bureau.png" }) {
        childImageSharp {
                fixed(width: 200, quality:80) {
                  ...GatsbyImageSharpFixed
                }
              }
      }

   environnement: file(relativePath: { eq: "8.jpg" }) {
      childImageSharp {
            fluid(maxWidth: 1600, quality:80) {
              ...GatsbyImageSharpFluid
            }
          }
    }

    siteExceptionnel: file(relativePath: { eq: "site.jpg" }) {
      childImageSharp {
            fluid(maxWidth: 1600, quality:80) {
              ...GatsbyImageSharpFluid
            }
          }
    }

    benevoles: file(relativePath: { eq: "benevoles.jpeg" }) {
      childImageSharp {
            fluid(maxWidth: 1600, quality:80) {
              ...GatsbyImageSharpFluid
            }
          }
    }
  }
`