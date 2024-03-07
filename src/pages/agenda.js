import React from 'react'
import { graphql } from 'gatsby'
import {GatsbyImage} from 'gatsby-plugin-image'
import Layout from '../components/layout'
import Container from '../components/Container/Container'
import Grid2 from '../components/Grid/Grid2'
import {Seo} from '../components/seo'

const AgendaPage = ({data}) => {
  console.log("allDatoCmsEvenement : " + data.allDatoCmsEvenement.nodes)
  
  return (
  
    <Layout>
      <Container text first>
        
        <h1>Nos prochains événements</h1>
        <p>Infos & renseignements : contact@rockontheloule.org</p>
      { data.allDatoCmsEvenement.nodes.map((evenement, id) =>
    
      <Grid2 
      key={id}
      evenement={evenement}
     
      image={<GatsbyImage image={evenement.visuel.gatsbyImageData} alt={evenement.titre}/>}
      
      reverse
  />
      )

      }

      </Container>
    </Layout>
  )
}

export default AgendaPage

// TODO : utiliser les props de la page en parametre du composant Seo pour recuperer les infos de datocms
export const Head = () => (
	<Seo title="Agenda - Rock on the l'Oule" 
	description="Retrouvez tous les événements de l'Association Rock on the l'Oule"
  />
  )
  




export const queryAgenda = graphql`
  query {

    allDatoCmsEvenement(sort: {date: ASC}, filter:{actif: {eq:true}}) {
      nodes {
        titre
        teaser
        slug
        visuel { gatsbyImageData }
        date(locale: "fr", formatString: "dddd DD MMMM YYYY")
      }
    }
  
  }
`
