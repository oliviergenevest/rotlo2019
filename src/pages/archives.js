import React from 'react'
/*import { Link } from 'gatsby'*/
import Img from 'gatsby-image'
import Layout from '../components/layout'
import Container from '../components/Container/Container'
import SEO from '../components/seo'
import Card from '../components/card/card'
import GridFlex from '../components/Grid/GridFlex'
import { graphql } from 'gatsby'

const Archives = ({data}) => {
  const images = data.affiches.edges
  // console.log({images})

  return  ( 
    <Layout> 
      <SEO title="Archives" keywords={[`gatsby`, `application`, `react`]} />
      <Container fluid first>
          <GridFlex>
              {images.map( (image,key) => (
                  <Card  key={image.node.childImageSharp.fluid.src} edition={25-key-1} annee={2019-key-1} affiche={ <Img
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

  }
`
