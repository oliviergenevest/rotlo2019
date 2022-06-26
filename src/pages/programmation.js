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
		name:'Bold Circus',
		heure:'19h00', 
		genre:'#Trapèze #Spectacle aérien',
		websiteURL:'http://compagnie.circlips.free.fr/',
		facebookURL: 'http://compagnie.circlips.free.fr/',
		description:"Un spectacle aérien et acrobatique, qui vous fera voyager au gré des dernières trouvailles de ces quatre artistes de cirque : trapèze fixe, équilibre sur les mains, corde lisse, jonglerie, magie, trapèze ballant. Des numéros de cirque décomplexés et pétillants, des séquences poétiques et chorégraphiques qui mettent le corps à l’honneur dans une perspective inventive, insolite et ludique.",
		cover: <Img fluid={data.boldcircus.childImageSharp.fluid} />,
		/*video:'https://www.youtube.com/embed/o6UkurBQ6IA',*/
	},
	{ 
		name:"Imperial Kikiristan",
		heure:'déambulations',
		genre:'#fanfare', 
		websiteURL:'https://www.kikiristan.com/',
		facebookURL: 'https://www.facebook.com/imperial.kikiristanddimperial.kikiristandds/',
		description:'Après 15 ans à sillonner les fêtes, galas et kermesses des villes françaises, la délégation du Kikiristan a choisi de s’associer à vote ville par le biais d’un jumelage. Malheureusement, nos six ressortissants confondent les nombreuses cérémonies et mélangent les vœux du maire avec la pêche aux canards, l’élection de Miss avec la déchéance de Nationalité ou encore le vin d’honneur avec la danse des fers à repasser. Et si, sans le savoir, nos six sympathiques apatrides renvoyaient un miroir à la société française en la confrontant à ses propres réalités ?',
		cover: <Img fluid={data.kikiristan.childImageSharp.fluid} />,
		video:'https://www.youtube.com/embed/IpHp7ijECK4',
	},
	{ 
		name:'Banan N Jug',
		heure:'20h30',
		genre:'#Calypso #Mento #Blues #Jazz', 
		websiteURL:'https://www.banannjugwixsite.com/monsite',
		facebookURL: 'https://www.facebook.com/banannjug',
		description:'Banan’N Jug est composé de quatre chanteuses et musiciennes : banjo, ukulélé, washboard, contrebasse, kazoo, claquettes, mais aussi glockenspiel, percussions....À l’instar des jugs bands du début du vingtième siècle, Banan’N Jug revisite sans complexe et tous azimuts blues, jazz, calypsos des Bahamas, mentos Jamaïcains, fado en français, blues chinois...<br/>	Animé par une énergie débordante, Banan’N Jug s’approprie le « Jug Spirit » avec humour et générosité. Se refusant à faire un compromis entre exigence artistique et liberté de ton, le groupe Montpelliérain se sent à sa place partout où l’on veut bien lui tendre une oreille !',
		cover: <Img fluid={data.banan.childImageSharp.fluid} />,
		video:'https://www.youtube.com/embed/RRSnrX6q6X4',
	},
	
	{ 
		name:"Trans Kabar",
		heure: "22h00",
		genre:'#Rock #Maloya', 
		websiteURL:'https://www.ciediscobole.com/',
		facebookURL: 'https://www.facebook.com/Transkabar',
		description:'Trans Kabar, groupe de rock maloya, travaille sur une lecture électrique des rites mystiques de l’île de la Réunion pour élaborer une musique de « trans maloya ». Ils s’inspirent du Servis Kabaré, cérémonie festive issue des rituels des esclaves faîte pour communier avec les ancêtres par la musique, les chants et les danses. Souvent rejeté, interdit, presque oublié, ce rite a survécu dans la clandestinité. Trans Kabar le remet au goût du jour.',
		cover: <Img fluid={data.transkabar.childImageSharp.fluid} />,
		video:'https://www.youtube.com/embed/NJlyilspa4k',
	},
	{ 
		name:'Smokey Joe & The Kid (DJ Set)', 
		heure:'23h30',
		genre:'#FR HIP HOP #Bass music #DJSet #Bordeaux',
		websiteURL:'https://smokeyjoethekid.bandcamp.com/',
		facebookURL: 'https://www.facebook.com/smokeyjoeandthekid/',
		description:"Association de 2 beatmakers de Bordeaux.",
		cover: <Img fluid={data.smokeyjoeandthekid.childImageSharp.fluid} />,
		video:'https://www.youtube.com/embed/ujD3OezaeyY',
	}
	
]
return (
  <Layout>
    <SEO 
    title="Programmation Les Parenthèses de l'Oule 2022" 
    keywords={[`festival`, `rock on the l'oule`, `la motte chalancon`,`rock`,`musique`,`spectacle`,`concert`,'antibalas']} 
    description="Mercredi 3 août 2022, prenez les routes sinueuses qui mènent à la Motte Chalancon, on s'occupe du reste ! C'est à la Motte Chalancon que ça se passe ! Au programme : concerts, détente, jeux en bois, produits locaux et buvette, démarche éco-responsable. On compte sur vous !"
     image={data.seo.childImageSharp.resize}
     />
 	<Container text first>		    
	    <h1>Programmation</h1>
	     <h2>Mercredi 3 août 2022</h2>
	     <p>C'est à la Motte Chalancon que ça se passe ! Au programme : concerts, détente, jeux en bois, produits locaux et buvette, démarche éco-responsable. On compte sur vous !</p>
	</Container>
	{
		artistes.map( (artiste, key) => (

			<Grid2 
			key={key}
	        text={{text:artiste.description}}
	        image={artiste.cover}
	        title={' [ '+artiste.heure+' ] '+ artiste.name}
			artiste={artiste}  
			reverse={key%2}
			
	    	/>
	 
    	))
	}
	<Container text >		    
	    <p>Le mercredi 3 août 2022, prenez les routes sinueuses qui mènent à la Motte Chalancon, on s'occupe du reste !</p>
	    <Img fluid={data.flyer.childImageSharp.fluid} style={{'maxWidth':'300px'}}/>
	</Container>
	
   

  </Layout>
)
}

export default Programmation

export const query = graphql`
	query progQuery{
	    flyer: file(relativePath: { eq: "programmation/flyer2022.jpg" }) {
	          childImageSharp {
	            fluid(maxWidth: 300, quality:80) {
	              ...GatsbyImageSharpFluid
	            }
	          }
	    }

 		boldcircus:file(relativePath: { eq: "programmation/boldcircus.jpg" }) {
	          childImageSharp {
	            fluid(maxWidth: 1500, quality:98) {
	              ...GatsbyImageSharpFluid
	            }
	          }
	    }

	    transkabar:file(relativePath: { eq: "programmation/transkabar.jpg" }) {
	          childImageSharp {
	            fluid(maxWidth: 1800, quality:98) {
	              ...GatsbyImageSharpFluid
	            }
	          }
	    }

	    kikiristan:file(relativePath: { eq: "programmation/kikiristan.jpg" }) {
	          childImageSharp {
	            fluid(maxWidth: 1800, quality:98) {
	              ...GatsbyImageSharpFluid
	            }
	          }
	    }
	    smokeyjoeandthekid:file(relativePath: { eq: "programmation/smokeyjoe.jpg" }) {
	          childImageSharp {
	            fluid(maxWidth: 1800, quality:98) {
	              ...GatsbyImageSharpFluid
	            }
	          }
	    }

	    banan:file(relativePath: { eq: "programmation/banannjug.jpg" }) {
	          childImageSharp {
	            fluid(maxWidth: 1800, quality:98) {
	              ...GatsbyImageSharpFluid
	            }
	          }
	    }


	    seo: file(relativePath: { eq: "programmation/flyer2022.jpg" }) { 
	        childImageSharp {
	            resize(width: 300) {
	              src
	              height
	              width
	            }
	          }
        }
	}`