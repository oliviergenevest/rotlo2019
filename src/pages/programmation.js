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
		name:'Goodbye Persil (Cie L’Arbre à Vache)', 
		heure:'19h00',
		genre:'#théâtre de rue',
		websiteURL:'https://www.cielarbreavache.com',
		facebookURL: 'https://www.facebook.com/Compagnie-lArbre-%C3%A0-Vache-38569513095/',
		description:"Une voiture rôde puis se gare devant l’entrée d’un jardin public. Deux individus en sortent, prêts à tout pour réussir leur mission... Un spectacle familial plein de surprises, drôle et touchant.",
		cover: <Img fluid={data.persil.childImageSharp.fluid} />,
		video:'https://www.youtube.com/embed/nX6im-ztrl0',
	},
	{ 
		name:"Saodaj'",
		heure:'20h00',
		genre:'#Maloya #Réunion', 
		websiteURL:'https://saodaj.bandcamp.com',
		facebookURL: 'https://www.facebook.com/saodaj',
		description:'Mlocêlant les influences d’Afrique Australe, d’Europe et de l’Océan Indien, le groupe créé des chansons hors du temps par l’alliance de rythmes provoquant la transe et de chants polyphoniques extatiques. Un Maloya nomade dépouillé d’artifice.',
		cover: <Img fluid={data.saodaj.childImageSharp.fluid} />,
		video:'https://www.youtube.com/embed/IbSopDjYsZA',
	},
	{ 
		name:'Antibalas',
		heure:'22h00', 
		genre:'#Afrobeat #NewYork',
		websiteURL:'https://antibalas.com',
		facebookURL: 'https://www.facebook.com/antibalas',
		description:"Collectif culte du renouveau afrobeat, le big band de Brooklyn fête 20 ans de carrière par une tournée mondiale qui s’arrêtera au Pas des Ondes. La promesse d’un live fulgurant mêlant esprit festif et considérations politiques dans un cocktail de jazz, de funk, de rythmes africains et latinos. Mystique et mythique !",
		cover: <Img fluid={data.antibalas.childImageSharp.fluid} />,
		video:'https://www.youtube.com/embed/xM6HBAM93V4',
	},
	{ 
		name:"Piniol",
		heure:'00h00',
		genre:'#RockLibre #Lyon', 
		websiteURL:'https://piniol.bandcamp.com/',
		facebookURL: 'https://www.facebook.com/PinioLband',
		description:'Hydre à 7 têtes née de la fusion des groupes PoiL et Ni, PinioL choisit d’occuper des terrains musicaux débridés et libres (noise, jazz, avant rock, math) tout en cultivant une recherche permanente. Un set aussi pêchu qu’inclassable.',
		cover: <Img fluid={data.piniol.childImageSharp.fluid} />,
		video:'https://www.youtube.com/embed/rWRQ5aHBWtI',
	},
	{ 
		name:"DJ Von Kids",
		genre:'#Dj #Rocknroll #Valence', 
		websiteURL:'https://www.facebook.com/von.kids.5',
		facebookURL: 'https://www.facebook.com/von.kids.5',
		description:'Un mix sauvage et envoûtant où se mêleront vinyles d’un autre âge et productions récentes, rockabilly, surf, garage, punk, cold wave et electro. De quoi se déhancher tout au long de la soirée.',
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

 		persil:file(relativePath: { eq: "programmation/compagnie-theatre-persil4.jpg" }) {
	          childImageSharp {
	            fluid(maxWidth: 1500, quality:98) {
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

	    piniol:file(relativePath: { eq: "programmation/piniol2.jpg" }) {
	          childImageSharp {
	            fluid(maxWidth: 1500, quality:98) {
	              ...GatsbyImageSharpFluid
	            }
	          }
	    }

	    saodaj:file(relativePath: { eq: "programmation/saodaj.jpg" }) {
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