import React from 'react'
/*import { Link } from 'gatsby'*/
import Img from 'gatsby-image'
import Layout from '../components/layout'
import Container from '../components/Container/Container'
import SEO from '../components/seo'
import CardExpand from '../components/card/cardExpand'
import GridFlex from '../components/Grid/GridFlex'
import { graphql } from 'gatsby'

const Archives = ({data}) => {
  const images = data.affiches.edges
  // console.log({images})

  return  ( 
    <Layout> 
      <SEO 
      title="Archives" 
      keywords={[`festival`, `rock on the l'oule`, `la motte chalancon`,`rock`,`musique`,`spectacle`,`concert`]}
      description="Un retour en image sur les 25 ans du festival Rock on The l'Oule à la Motte Chalancon. Retrouvez sur cette page le détail des éditions précédentes."
       image={data.seo.childImageSharp.resize}
       />
      <Container fluid first bgBlack>
          <GridFlex>
              {images.map( (image,key) => (
                  <CardExpand  key={image.node.childImageSharp.fluid.src} edition={26-key-1} annee={2020-key-1} affiche={ <Img
                         fluid={image.node.childImageSharp.fluid}
                            />}/>
              ))}
          </GridFlex>
      </Container> 
    </Layout>
  )
}

export default Archives



export const query = graphql`
  query {

    affiches: allFile (filter:{relativeDirectory:{eq:"affiches"}, extension:{eq:"jpg"}}, sort: {fields: [name], order: DESC}){
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

    seo: file(relativePath: { eq: "aff-rotlo-2019.jpg" }) { 
        childImageSharp {
            resize(width: 1200) {
              src
              height
              width
            }
          }
    }

  }
`
