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
		name:"Saodaj'",
		genre:'#Maloya', 
		websiteURL:'https://saodaj.bandcamp.com',
		facebookURL: 'https://www.facebook.com/saodaj',
		description:'Groupe qui a bien le vent en poupe (transmusicales, Vieilles charrues, Francofolies…), chouette et avec des filles dedans. ',
		cover: <Img fluid={data.saodaj.childImageSharp.fluid} />,
		video:'https://www.youtube.com/embed/IbSopDjYsZA',
	},
	{ 
		name:"Piniol",
		genre:'#Rock', 
		websiteURL:'https://piniol.bandcamp.com/',
		facebookURL: 'https://www.facebook.com/PinioLband',
		description:'Sur scène, ce sont 2 trios guitare basse batterie, un à jardin, l’autre à cour, séparés par un claviériste, élément central et point convergent qui créent une étrange impression. Voit-on double ? Oui et non et c’est probablement cette incertitude qui invite à la perte des sens et à un certain abandon. Piniol ne choisit pas entre maxi et minimalisme et affirme sa singularité dans son approche syncrétique d’extrêmes musicaux qu’on aurait pu juger compliqué à accommoder de prime abord.',
		cover: <Img fluid={data.piniol.childImageSharp.fluid} />,
		video:'https://www.youtube.com/embed/rWRQ5aHBWtI',
	},
	{ 
		name:"DJ Von Kids",
		genre:'#DjSet', 
		websiteURL:'https://www.facebook.com/von.kids.5',
		facebookURL: 'https://www.facebook.com/von.kids.5',
		description:'DJ Von Kids',
		cover: <Img fluid={data.djvonkids.childImageSharp.fluid} />,
		video:'https://www.youtube.com/embed/lQDPpN3JwNE',
	}

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
	     <p>C'est au Pas des Ondes à la Motte Chalancon que ça se passe ! Entre montagnes et plans d'eau, Rock on the l'Oule fêtera sa 25ème édition. Au programme : concerts, cirque, détente, jeux en bois, produits locaux et buvette, démarche éco-responsable. On compte sur vous !</p>
	</Container>
	{
		artistes.map( (artiste, key) => (

			<Grid2 
			key={key}
	        text={{text:artiste.description}}
	        image={artiste.cover}
	        title={artiste.name}
			artiste={artiste}  
			reverse={key%2}
			
	    	/>
	 
    	))
	}
	<Container text >		    
	    <p>Le 7 Août prochain, prenez les routes sinueuses qui mènent au Pas des Ondes, on s'occupe du reste !</p>
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

	    piniol:file(relativePath: { eq: "programmation/piniol.jpg" }) {
	          childImageSharp {
	            fluid(maxWidth: 1500, quality:98) {
	              ...GatsbyImageSharpFluid
	            }
	          }
	    }

	    saodaj:file(relativePath: { eq: "programmation/saodaj3.jpg" }) {
	          childImageSharp {
	            fluid(maxWidth: 1500, quality:98) {
	              ...GatsbyImageSharpFluid
	            }
	          }
	    }

	    djvonkids:file(relativePath: { eq: "programmation/djvonkids.jpg" }) {
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