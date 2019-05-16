import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import Container from '../components/Container/Container'
import SEO from '../components/seo'
import Grid2 from '../components/Grid/Grid2'
/*import styles from './biography.module.scss'*/
const Programmation = () => {
const data = useStaticQuery(query)
const artistes = [
	{ 
		name:'ANTIBALAS', 
		genre:'#Afrobeat #Etats-Unis',
		websiteURL:'https://antibalas.com',
		facebookURL: 'https://www.facebook.com/antibalas',
		description:"Nous aurons le privilège d’accueillir au plan d'eau du Pas des Ondes (26) le groupe new-yorkais ANTIBALAS à l'occasion de leur tournée européenne. Pionnier de l’afrobeat aux États-Unis, Antibalas s'est forgé une réputation scénique sans précédent sur les plus grandes scènes internationales depuis 20 ans.",
		cover: <Img fluid={data.antibalas.childImageSharp.fluid} />,
		video:'https://www.youtube.com/embed/xM6HBAM93V4',
	},
	{ 
		name:'Groupe 2',
		genre:'#Rock', 
		websiteURL:'https://antibalas.com',
		facebookURL: 'https://www.facebook.com/antibalas',
		description:'bla bla',
		cover: <Img fluid={data.antibalas.childImageSharp.fluid} />,
		video:'https://www.youtube.com/embed/xM6HBAM93V4',
	},

]
return (
  <Layout>
    <SEO 
    title="Programmation Rock on the l'Oule 2019" 
    keywords={[`festival`, `rock on the l'oule`, `la motte chalancon`,`rock`,`musique`,`spectacle`,`concert`,'antibalas']} 
    description="Pour la 25ème édition, nous aurons le privilège d’accueillir au plan d'eau du Pas des Ondes (26) le groupe new-yorkais ANTIBALAS à l'occasion de leur tournée européenne."
     image={data.seo.childImageSharp.resize}
     />
 	<Container text first>		    
	    <h1>Programmation</h1>
	     <h2>25ème édition : Mercredi 7 août 2019</h2>
	</Container>
 	<Grid2 
        text={{text:artistes[0].description}}
        image={artistes[0].cover}
        title={artistes[0].name}
		artiste={artistes[0]}          
        reverse
    />
    {/*<Grid2 
        text={{text:artistes[1].description}}
        image={artistes[1].cover}
        title={artistes[1].name}
		artiste={artistes[1]}          
        
    />*/}
	<Container text first>		    
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

	    antibalas:file(relativePath: { eq: "programmation/antibalas.jpg" }) {
	          childImageSharp {
	            fluid(maxWidth: 1500, quality:98) {
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
	}`