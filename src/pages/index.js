import React from 'react'
//import { Link } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import Container from '../components/Container/Container'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import Grid1 from '../components/Grid/Grid1'
import Grid2 from '../components/Grid/Grid2'
import GridImage from '../components/Grid/GridImage'
/*import TimelineProg from '../components/timeline'*/
import RandomImage from '../components/RandomImage'

const IndexPage = ({data}) => {
   return (
      <Layout>
          <SEO title="Accueil" 
          keywords={[`festival`, `rock on the l'oule`, `la motte chalancon`,`rock`,`musique`,`spectacle`,`concert`]} 
          description="Mardi 3 et mercredi 4 août 2021, c'est sur la place du Fort de la Motte Chalancon que ça se passe. Rock on the l'Oule fêtera sa 27ème édition. Au programme : concerts, expo, détente, jeux en bois, produits locaux et buvette, démarche éco-responsable. On compte sur vous !" 
          image={data.seo.childImageSharp.resize}/>
          <Grid1 
            image = { <RandomImage gatsbyImageArray={data.backgroundImages}/> } 
            flyer = {<Img fluid={data.flyer.childImageSharp.fluid} />}
            heroText = {{text:'Rock on the l\'Oule #27'}} 
            text1= {{text:"3 & 4 août 2021 - 19h - La Motte Chalancon"}} 
            text2= {{text:"Dan Gharibian Trio - René Lacaille - Guaracha Sabrosa - David Suissa Quartet"}} 
            text3= {{text:"C'est sur la place du Fort que ça se passe ! Rock on the l'Oule fêtera sa 27ème édition. Au programme : concerts, expo, détente, jeux en bois, produits locaux et buvette, démarche éco-responsable. On compte sur vous !"}} 
          />
        
          {/*<TimelineProg/>*/}
{/*
<Container text first> 
 <h1>Festival Rock on the l'Oule</h1>
  <p>Votre petit festival rural et génial est dans ses petits souliers. Désarçonné par ces événements sanitaires et leurs conséquences qui nous dépassent largement.</p>
  <p>Dans ce contexte trop incertain, nous excluons avec regret la possibilité d’organiser une 26ème édition cet été.</p>
  <p>Nous avons le cœur gros d’abandonner ici toute la préparation du Festival - fruit de l’échange depuis plusieurs mois avec tous nos bénévoles - que nous souhaitions cette année encore international, avec des artistes venus du Royaume Uni et de La Réunion.</p>
  <p>Cependant nous sommes toujours animés par ce besoin vital de lien social, et l’envie furieuse de partage et de rencontres, aujourd’hui peut-être plus encore nécessaires dans cette longue période d’isolement.</p>
  <p>Prolongeant notre réflexion tout en guettant l’évolution de la situation sanitaire, économique et sociale, nous espérons pouvoir vous proposer cet été une forme culturelle alternative qui ait du sens, sur le plan d’eau du Pas des Ondes ou ailleurs.</p>
  <p>On vous en dit plus courant juillet !</p>

  <p>Portez-vous bien les amis, on pense fort à vous !</p>
 </Container>
  */}
  <Container text first> 
 <h2>Les parenthèses de l'Oule #2</h2>
  <p>L’association Rock On The l’Oule est très heureuse de pouvoir proposer à nouveau des
événements suite à la crise sanitaire qui a largement affecté nos activités depuis plus d’un an.
Néanmoins, nous avons profité de ce temps pour nous organiser, dernière nos écrans, en
termes de budget, conseils d’administration, et autres réunions d’équipe pour remodeler notre
implantation sur le territoire.</p>
<p>
En 2020, nous avons été contraints d’organiser une soirée « à minima », dans un jardin privé,
avec une jauge limitée et en respectant les consignes sanitaires. Il y avait quelque chose de
féerique ce mercredi 05 août 2020 dans cette soirée insolite et intergénérationnelle sous les
étoiles, ci-dessous quelques clichés :
</p>
<GridImage images={data.edition2020Gallery}/>
<p>Pour cet été, les mardi 3 et mercredi 4 Aout 2021, nous prévoyons 2 soirées de concerts au
jardin du fort, au cœur du village de La Motte Chalancon. Ambiance festive et tout public,
avec repas complet proposé sur la place du Fort, buvette sur place, jeux en bois pour petits et
grands, et exposition de tableaux de la jeune artiste diplômée des Beaux-Arts de Valence,
Leila Festa.</p>
<p>
Côté concerts, voici les premiers noms confirmés pour cette édition :
Ambiance latine avec le groupe de musique Cubaine : « Guaracha Sabrosa »
Chanson Française et Arménienne avec le « Dan Gharibian Trio ».</p>
<p>La programmation complète sera dévoilée début juillet, avec billetterie en ligne sur notre site
(attention, jauge limitée !). Merci au Département de la Drôme, à la Région Auvergne Rhône
Alpes et aux communes de la Motte Chalancon, de Cornillon et de Rottier pour leur soutien
inconditionnel.</p>
 </Container>
        <Container fluid > 
       {/* <Grid2 
            text={{text:"Deux plans d’eau posés au coeur des montagnes préalpines, à la frontière entre Diois et Baronnies. Un oasis dominé par les ruines du château médiéval de Cornillon et survolé par les hérons, vautours et autres spécimens de la faune locale."}}
              image={<Img fluid={data.siteExceptionnel.childImageSharp.fluid} />}
              title="Un lieu magique : le site du Pas des Ondes."
            /> */}  

          <Grid2 
            text={{text:"Dans une ambiance familiale rappelant les fêtes de village traditionnelles, Rock on the l’Oule propose une programmation artistique de premier choix faisant la part belle au métissage. Une rencontre entre les genres musicaux les plus variés et des artistes aux origines géographiques multiples. Mais aussi du cirque, des performances en tous genres, des jeux en bois, un salon de thé sous tentes berbères... De quoi rassembler toutes les générations de public et faire se rencontrer les cultures."}}
              image={<Img fluid={data.brassageCulture.childImageSharp.fluid} />}
              title="Un joyeux brassage de cultures"
              reverse
            />

          <Grid2 
                text={{text:"Bière locale, picodon, pain bio, jus de fruits artisanaux, saucisses, plat chaud... La buvette et le snack privilégient les circuits courts et les produits de qualité. Une occasion de découvrir ou redécouvrir la variété des richesses régionales. Par ailleurs, une attention particulière est accordée par l’organisation à la préservation du site et au respect de l’environnement : étude d’impact, tri des déchets, toilettes sèches, gobelets réutilisables... Enfin, un réel souci anime les organisateurs pour rendre la manifestation accessible au plus grand nombre. Cela se traduit notamment par la recherche de tarifs raisonnables et adaptés."}}
                image={<Img fluid={data.environnement.childImageSharp.fluid} />}
                title="Un festival durable et responsable."
                
            />

             <Grid2 
                text={{text:"Fait rare pour un festival qui dure depuis plus de vingt ans, son organisation est toujours le fait d’une équipe 100 % bénévole. Une bande de passionnés, attachée à la région, qui a su rassembler des énergies multiples et fidèles autour de ce projet au long cours. Aujourd’hui, ce sont près de 70 bénévoles et le soutien de nombreux habitants, associations et entreprises de la région qui permettent à cette aventure de se poursuivre."}}
                image={<Img fluid={data.benevoles.childImageSharp.fluid} />}
                title="Une aventure humaine et collective qui dure depuis... 26 ans."
                reverse
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

    backgroundImages: allFile (filter:{relativeDirectory:{eq:"backgrounds2021"}, extension:{eq:"jpg"}}){
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

    flyer: file(relativePath: { eq: "aff-rotlo-2019.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 400, quality:90) {
              ...GatsbyImageSharpFluid
            }
          }  
    }

    seo: file(relativePath: { eq: "aff-rotlo-2019.jpg" }) { 
        childImageSharp {
            resize(width: 1200) {
              src
              height
              width
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

    siteExceptionnel: file(relativePath: { eq: "pasdesondes.jpg" }) {
      childImageSharp {
            fluid(maxWidth: 1600, quality:80) {
              ...GatsbyImageSharpFluid
            }
          }
    }

    brassageCulture: file(relativePath: { eq: "brassage-culture.jpg" }) {
      childImageSharp {
            fluid(maxWidth: 1600, quality:80) {
              ...GatsbyImageSharpFluid
            }
          }
    }

    benevoles: file(relativePath: { eq: "equipe1.jpg" }) {
      childImageSharp {
            fluid(maxWidth: 1600, quality:80) {
              ...GatsbyImageSharpFluid
            }
          }
    }

    edition2020Gallery: allFile (filter:{relativeDirectory:{eq:"edition2020"}, extension:{eq:"jpg"}}, sort: {fields: [name], order: DESC}){
    edges {
      node {
          childImageSharp {
            fluid(maxWidth: 450, quality:80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`