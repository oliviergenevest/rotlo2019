import React from 'react'

import {GatsbyImage} from 'gatsby-plugin-image'
import Layout from '../components/layout'
import Container from '../components/Container/Container'
import { graphql } from 'gatsby'
import {Seo} from '../components/seo'
import Grid1 from '../components/Grid/Grid1'
import Grid2 from '../components/Grid/Grid2'
import GridImage from '../components/Grid/GridImage'
//import  ModalRotlo  from '../components/modal';
import Btn from '../components/Btn'
import GridHomeItems from '../components/Grid/GridHomeItems'



const IndexPage = ({data}) => {
  
  console.log(data.homepage)
   return (
      <Layout>
      { /* <ModalRotlo/> */}
          
          <Grid1 
          
            slidesData = {data.homepage.slideshow}
            heroText = {{text:data.homepage.heroTitle}} 
            text1= {{text:data.homepage.subtitle}} 
            text2= {{text:data.homepage.prog}} 
            text3= {{text:"On compte sur vous !"}} 
          />
{/*
<Container text first> 
<h2>Festival Rock on the l'Oule : 7 et 8 août 2024</h2>
</Container>   

<Container fluid> 
  <GridHomeItems items={data.homepage.items}/>
</Container>   
*/}
<Container fluid> 
  <br/>
  <br/>
  <GatsbyImage image={data.lisa.childImageSharp.gatsbyImageData} alt="Rock on the l'Oule" />
</Container> 

<Container text first> 
<h2>Retour sur l'édition 2022</h2>
  <p>Rock On The l'Oule, festival né dans l'ancien monde, fêtait sa 26ème édition le 3 août dernier. Tel le phénix, il a su se relever des cendres post-covid. 
C'était un immense plaisir de revoir tous ces sourires et de participer au brassage des générations.. quelle joie d'avoir partagé ce moment sous les étoiles du Pas des Ondes.  
</p><p>Merci à tous les artistes, techniciens, prestataires, soutiens, bénévoles et festivaliers d'avoir rendu possible ce moment suspendu. 
</p><p>Quelques souvenirs visuels en attendant la suite 😘😘</p>





 <GridImage images={data.edition2022retour} fluid/>
 </Container> 


        <Container fluid  >
         {/* <div style={{'display':'flex','justifyContent':'center'}} >
            <Btn to='/programmation'>Programmation 2022</Btn>
            <Btn to='/billetterie'>Billetterie</Btn>
            <Btn external to='https://framaforms.org/inscriptions-benevoles-rock-on-the-loule-2022-1657456112' target="_blank" rel="noreferrer noopener" >Devenir Bénévole</Btn>
        </div>   */} 
        <Grid2 
            text={{text:"Deux plans d’eau posés au coeur des montagnes préalpines, à la frontière entre Diois et Baronnies. Un oasis dominé par les ruines du château médiéval de Cornillon et survolé par les hérons, vautours et autres spécimens de la faune locale."}}
              image={<GatsbyImage image={data.siteExceptionnel.childImageSharp.gatsbyImageData} alt="" />}
              title="Un lieu magique : le Moulin des Pendants (Pas des Ondes)."
            /> 

          <Grid2 
            text={{text:"Dans une ambiance familiale rappelant les fêtes de village traditionnelles, Rock on the l’Oule propose une programmation artistique de premier choix faisant la part belle au métissage. Une rencontre entre les genres musicaux les plus variés et des artistes aux origines géographiques multiples. Mais aussi du cirque, des performances en tous genres, des jeux en bois, un salon de thé sous tentes berbères... De quoi rassembler toutes les générations de public et faire se rencontrer les cultures."}}
              image={<GatsbyImage image={data.brassageCulture.childImageSharp.gatsbyImageData} style={{width:'100%'}} alt=""/>}
              title="Un joyeux brassage de cultures"
              reverse
            />

          <Grid2 
                text={{text:"Bière locale, picodon, pain bio, jus de fruits artisanaux, saucisses, plat chaud... La buvette et le snack privilégient les circuits courts et les produits de qualité. Une occasion de découvrir ou redécouvrir la variété des richesses régionales. Par ailleurs, une attention particulière est accordée par l’organisation à la préservation du site et au respect de l’environnement : étude d’impact, tri des déchets, toilettes sèches, gobelets réutilisables... Enfin, un réel souci anime les organisateurs pour rendre la manifestation accessible au plus grand nombre. Cela se traduit notamment par la recherche de tarifs raisonnables et adaptés."}}
                image={<GatsbyImage image={data.environnement.childImageSharp.gatsbyImageData} alt=""/>}
                title="Un festival durable et responsable."
                
            />

             <Grid2 
                text={{text:"Fait rare pour un festival qui dure depuis plus de vingt ans, son organisation est toujours le fait d’une équipe 100 % bénévole. Une bande de passionnés, attachée à la région, qui a su rassembler des énergies multiples et fidèles autour de ce projet au long cours. Aujourd’hui, ce sont près de 70 bénévoles et le soutien de nombreux habitants, associations et entreprises de la région qui permettent à cette aventure de se poursuivre."}}
                image={<GatsbyImage image={data.benevoles.childImageSharp.gatsbyImageData} alt=""/>}
                title="Une aventure humaine et collective qui dure depuis... 27 ans."
                reverse
            />
          </Container> 
            <Container grandBureau>
              <GatsbyImage image={data.logoGrandBureau.childImageSharp.gatsbyImageData} style={{maxWidth: '200px',marginBottom:'2rem'}} alt=""/>
              <p>Rock On The l’Oule fait parti du Grand Bureau. Grand Bureau est un réseau né de la fusion de la FEPPRA, du GRADA, du GRAL et de Tagada Tsoin Tsoin. Lancé officiellement fin janvier 2017, il coordonne une nouvelle dynamique de coopération entre les acteurs de la filière musiques actuelles. Grand Bureau est le réseau des acteurs musiques actuelles en Auvergne-Rhône-Alpes. Il regroupe à ce jour plus de 160 structures membres de l’ensemble de la filière des musiques actuelles, et leur donne un cadre de coopération.</p>
              <p><a target="_blank" rel="noopener noreferrer" href="http://grandbureau.fr/">http://grandbureau.fr/</a></p>  
          </Container>
         
      </Layout>
)
}

export default IndexPage

export const Head = () => (
  <Seo title="Association Rock on the l'Oule" 
	description="Retrouvez toutes les activités de l'Association Rock on the l'Oule"
  />
)

export const query = graphql`
  query {

    
      
      homepage:datoCmsHomepage {
        slideshow { gatsbyImageData(width:2000) }
        prog
        subtitle 
        heroTitle
        items {
          ... on DatoCmsGriditem {
            model { apiKey }
            name
            slug
            cover { 
              gatsbyImageData
            }
          }
        }
      }
    
    lisa: file(relativePath: { eq: "visu lisa.png" }) {
          childImageSharp {
            gatsbyImageData(width:1950) 
          }
    }

    placeholderImage: file(relativePath: { eq: "site.jpg" }) {
          childImageSharp {
            gatsbyImageData(width:1600) 
          }
    }

  
    seo: file(relativePath: { eq: "programmation/flyer2022.jpg" }) { 
        childImageSharp {
          gatsbyImageData
            resize(width: 300) {
              src
              height
              width
            }
          }
        }

    logoGrandBureau: file(relativePath: { eq: "grand-bureau.png" }) {
        childImageSharp {
          gatsbyImageData(width:200)
               
      }}

   environnement: file(relativePath: { eq: "8.jpg" }) {
      childImageSharp {
        gatsbyImageData(width:1600)
           
      }
    }

    siteExceptionnel: file(relativePath: { eq: "pasdesondes.jpg" }) {
      childImageSharp {
        gatsbyImageData(width:1600)
           
      }
    }

    brassageCulture: file(relativePath: { eq: "brassage-culture.jpg" }) {
      childImageSharp {
        gatsbyImageData(width:1600)
           
      }
    }

    benevoles: file(relativePath: { eq: "equipe1.jpg" }) {
      childImageSharp {
        gatsbyImageData(width:1600) 
      }
    }

    edition2022Gallery: allFile (filter:{relativeDirectory:{eq:"edition2022"}, extension:{eq:"jpg"}}, sort: {name: DESC}){
    edges {
      node {
          childImageSharp {
            gatsbyImageData(width:2000)
           
          }
        }
      }
    }
    edition2022retour: allFile (filter:{relativeDirectory:{eq:"edition2022retour"}, extension:{eq:"jpg"}},  sort: {name: DESC}){
      edges {
        node {
            childImageSharp {
              gatsbyImageData(width:500, height:300, quality:100)
            
            }
          }
        } 
      }
  }
`