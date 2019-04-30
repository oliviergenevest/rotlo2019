import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import Container from '../components/Container/Container'
import SEO from '../components/seo'
/*import styles from './biography.module.scss'*/
const Programmation = () => {
const data = useStaticQuery(query)
return (
  <Layout>
    <SEO title="Programmation Rock on the l'Oule 2019" keywords={[`festival`, `rock on the l'oule`, `la motte chalancon`,`rock`,`musique`,`spectacle`,`concert`]} />

 <Container text first>
    
    <h1>Programmation</h1>
    
    <h2>25ème édition : Mercredi 7 août 2019</h2>
    <p>Retrouvez très prochainement la programmation complète du festival Rock on the l'Oule 2019</p>
    <Img fluid={data.flyer.childImageSharp.fluid} style={{'maxWidth':'400px'}}/>
    
  


</Container>
  </Layout>
)
}

export default Programmation

export const query = graphql`
	query progQuery{
	    flyer: file(relativePath: { eq: "aff-rotlo-2019.jpg" }) {
	          childImageSharp {
	            fluid(maxWidth: 400, quality:80) {
	              ...GatsbyImageSharpFluid
	            }
	          }
	    }
	}`