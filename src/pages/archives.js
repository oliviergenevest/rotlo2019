import React from 'react'
/*import { Link } from 'gatsby'*/
import {GatsbyImage} from 'gatsby-plugin-image'
import Layout from '../components/layout'
import Container from '../components/Container/Container'
import {Seo} from '../components/seo'
import CardExpand from '../components/card/cardExpand'
import GridFlex from '../components/Grid/GridFlex'
import { graphql } from 'gatsby'

const Archives = ({data}) => {
  const images = data.affiches.edges
  // console.log({images})

  return  ( 
    <Layout> 
    
      <Container fluid first bgBlack>
          <GridFlex>
              {images.map( (image,key) => (
                  <CardExpand  key={key} edition={27-key-1} annee={2023-key-1} affiche={ <GatsbyImage
                         image={image.node.childImageSharp.gatsbyImageData} alt=""
                            />}/>
              ))}
          </GridFlex>
      </Container> 
    </Layout>
  )
}

export default Archives



// TODO : utiliser les props de la page en parametre du composant Seo pour recuperer les infos de datocms
export const Head = () => (
	<Seo title="Archives Rock on the l'Oule" 
  />
  )
  

export const query = graphql`
  query {

    affiches: allFile (filter:{relativeDirectory:{eq:"affiches"}, extension:{eq:"jpg"}}, sort: {name: DESC}){
    edges {
      node {
        id
          childImageSharp {
            gatsbyImageData(width:350)
          
          }
        }
      }
    }

   

   

  }
`
