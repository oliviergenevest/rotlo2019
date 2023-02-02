import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import {GatsbyImage} from 'gatsby-plugin-image'
import Layout from '../components/layout'
import Container from '../components/Container/Container'
import {Seo} from '../components/seo'
import Grid2 from '../components/Grid/Grid2'
/*import styles from './biography.module.scss'*/
const Programmation = () => {
const data = useStaticQuery(query)

const artistes = [
	{ 
		name:'Bold Circus',
		heure:'19h30', 
		genre:'#Trapèze #Spectacle aérien #jonglerie',
		websiteURL:'http://compagnie.circlips.free.fr/',
		facebookURL: 'http://compagnie.circlips.free.fr/',
		description:"Un spectacle aérien et acrobatique, qui vous fera voyager au gré des dernières trouvailles de ces artistes : trapèze fixe, jonglerie, magie, des numéros de cirque décomplexés et pétillants, des séquences poétiques et chorégraphiques qui mettent le corps à l’honneur dans une perspective inventive, insolite et ludique.",
		cover: <GatsbyImage image={data.boldcircus.childImageSharp.gatsbyImageData} alt='Bold Circus' />,
		video:'https://www.youtube.com/embed/KgyvYnSYHfo',
	},
	{ 
		name:"Imperial Kikiristan",
		heure:'déambulations',
		genre:'#fanfare', 
		websiteURL:'https://www.kikiristan.com/',
		facebookURL: 'https://www.facebook.com/imperial.kikiristanddimperial.kikiristandds/',
		description:'Issu de 10 ans de pérégrinations musicales dans plus de 30 pays, l\'orchestre Imperial Kikiristan condense le meilleur de son savoir-faire : interaction, chorégraphies, humour, musique, chants et danses, solos frénétiques, sérénades...C\'est en fanfare et avec de nombreux rituels d\'intronisation que nos kikiristanais sauront se faire accepter auprès de la population locale...tout du moins c\'est ce qu\'ils espèrent !',
		cover: <GatsbyImage image={data.kikiristan.childImageSharp.gatsbyImageData} alt="Imperial Kikiristan"/>,
		video:'https://www.youtube.com/embed/IpHp7ijECK4',
	},
	{ 
		name:'Banan\'N Jug',
		heure:'20h30',
		genre:'#Calypso #Mento #Blues #Jazz', 
		websiteURL:'https://www.banannjugwixsite.com/monsite',
		facebookURL: 'https://www.facebook.com/banannjug',
		description:'Composé de quatre chanteuses et musiciennes : banjo, ukulélé, washboard, contrebasse, kazoo, claquettes, mais aussi glockenspiel, percussions... Banan\'N Jug revisite sans complexe et tous azimuts blues, jazz, calypsos des Bahamas, mentos Jamaïcains, fado en français, blues chinois... avec une énergie débordante ! Se refusant à faire un compromis entre exigence artistique et liberté de ton, le groupe Montpelliérain se sent à sa place partout où l’on veut bien lui tendre une oreille !',
		cover: <GatsbyImage image={data.banan.childImageSharp.gatsbyImageData} alt="Banan'N Jug"/>,
		video:'https://www.youtube.com/embed/RRSnrX6q6X4',
	},
	
	{ 
		name:"Trans Kabar",
		heure: "22h45",
		genre:'#Rock #Maloya', 
		websiteURL:'https://www.ciediscobole.com/',
		facebookURL: 'https://www.facebook.com/Transkabar',
		description:'Musique hybride, métisse, née de la rencontre entre le maloya réunionnais traditionnel et les instruments du rock et du jazz. Moins qu\'un concept, une alchimie fusionnelle entre 4 musiciens naturellement curieux, avides d\'aventures et libres de fantasmer une nouvelle façon d\'approcher la musique trad. C\'est dense, puissant, chamanique et volcanique.',
		cover: <GatsbyImage image={data.transkabar.childImageSharp.gatsbyImageData} alt="Trans Kabar"/>,
		video:'https://www.youtube.com/embed/NJlyilspa4k',
	},
	{ 
		name:'Smokey Joe & The Kid (DJ Set)', 
		heure:'00h00',
		genre:'#FR HIP HOP #Bass music #DJSet #Bordeaux',
		websiteURL:'https://smokeyjoethekid.bandcamp.com/',
		facebookURL: 'https://www.facebook.com/smokeyjoeandthekid/',
		description:"Association de 2 beatmakers de Bordeaux, Smokey Koe & The Kid est une plongée dans le Hip-Hop US, le funk et la soul 70' avec toujours la même volonté d'en tirer l'essentiel : la beauté des mélodies et le groove implacable. Les DjSets de Smokey Joe & TheKid sont groovy, puissants et terriblement funs. Let's dance",
		cover: <GatsbyImage image={data.smokeyjoeandthekid.childImageSharp.gatsbyImageData} alt= 'Smokey Joe & The Kid (DJ Set)'/>,
		video:'https://www.youtube.com/embed/ujD3OezaeyY',
	}
	
]
return (
  <Layout>
  
 	<Container text first>		    
	    <h1>Programmation</h1>
	     <h2>Mercredi 3 août 2022</h2>
	     <p>C'est au plan d'eau du Pas des Ondes que ça se passe ! Au programme : concerts, détente, jeux en bois, produits locaux et buvette, démarche éco-responsable. On compte sur vous !</p>
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
	    <GatsbyImage image={data.flyer.childImageSharp.gatsbyImageData} style={{'maxWidth':'300px'}} alt="flyer"/>
	</Container>
	
   

  </Layout>
)
}

export default Programmation

// TODO : utiliser les props de la page en parametre du composant Seo pour recuperer les infos de datocms
export const Head = () => (
	<Seo title="Programmation - Festival Rock on the l'Oule 2023" 
	description="Le Festival Rock on the l'Oule, c'est des concerts, des jeux en bois, des produits locaux et buvette, une démarche éco-responsable."
  />
  )
  
export const query = graphql`
	query progQuery{
	    flyer: file(relativePath: { eq: "programmation/flyer2022.jpg" }) {
	          childImageSharp {
				gatsbyImageData(width:300)
	           
	          }
	    }

 		boldcircus:file(relativePath: { eq: "programmation/boldcircus.jpg" }) {
	          childImageSharp {
				gatsbyImageData(width:1500)
	           
	          }
	    }

	    transkabar:file(relativePath: { eq: "programmation/transkabar.jpg" }) {
	          childImageSharp {
				gatsbyImageData(width:1800)
	           
	          }
	    }

	    kikiristan:file(relativePath: { eq: "programmation/kikiristan.jpg" }) {
	          childImageSharp {
				gatsbyImageData(width:1800)
	          
	          }
	    }
	    smokeyjoeandthekid:file(relativePath: { eq: "programmation/smokeyjoe.jpg" }) {
	          childImageSharp {
				gatsbyImageData(width:1800)
	            
	          }
	    }

	    banan:file(relativePath: { eq: "programmation/banannjug.jpg" }) {
	          childImageSharp {
				gatsbyImageData(width:1800)
	         
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
	}`