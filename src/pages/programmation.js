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
		name:"René Lacaille",
		heure:'Mardi : 21h30',
		genre:'#Maloya #Réunion', 
		websiteURL:'https://www.renelacaille.net/',
		facebookURL: 'https://www.facebook.com/profile.php?id=100011841307113',
		description:'Attention, la Renyon lela ! Dans l’histoire des musiques de l’Océan indien, René Lacaille est un monument. Acteur de la transition entre sonorités rurales et musiques urbaines au début des années 70, issu d’une famille d’agriculteurs et segatiers, formé à l’école exigeante des «bals poussière», il fut un acteur essentiel du renouveau esthétique du cru (sur les registres sega-jazz, maloya électrique, pop). Sollicité par de grands musiciens, salué par l’Académie Charles Cros ou le Prix Gus Viseur, ce poly-instrumentiste doublé d’un conteur formidable a depuis partagé les facettes de sa créolité dans le monde entier. ',
		cover: <Img fluid={data.lacaille.childImageSharp.fluid} />,
		video:'https://www.youtube.com/embed/ngoj5PSXGUA',
	},
	{ 
		name:'David Suissa Quartet', 
		heure:'Mardi : 23h30',
		genre:'#MusiqueDuMonde #Rock #Jazz #Lyon',
		websiteURL:'https://chanteettaistoi.com/suissa/',
		facebookURL: 'https://www.facebook.com/Compagnie-lArbre-%C3%A0-Vache-38569513095/',
		description:"Suissa est un artiste de chansons baignées dans la musique du monde, le rock et le jazz. Il se nourrit de cultures mélangées, ensoleillées et de la musique des années 70, expérimentale, sauvage, vivante. Riche d’une dizaine d’albums dont trois sous son nom et de créations avec Bigre, Balmino, Leitmotiv Blastik Pertran, le Grand Bal des Cousins, Coquine... Il est aussi producteur phonographique avec le label chante et tais toi (Eric le Rouge, Kacimi, XXL, Six Ring Circus…)",
		cover: <Img fluid={data.suissa.childImageSharp.fluid} />,
		video:'https://www.youtube.com/embed/DfcLuW8CV-w',
	},
	{ 
		name:"Cie Soum-Soum : les Jumelles de l'Alchimiste",
		heure: "Mercredi : 18h30",
		genre:'#Mime #Conte #Théâtre', 
		websiteURL:'https://www.facebook.com/ciesoumsoum',
		facebookURL: 'https://www.facebook.com/ciesoumsoum',
		description:'La Cie Soum-Soum est une toute jeune compagnie alliant théâtre du mouvement, conte, mime et chant. Entrée libre !',
		cover: <Img fluid={data.lucia.childImageSharp.fluid} />,
		video:'',
	},
	{ 
		name:'Dan Gharibian Trio',
		heure:'Mercredi : 21h30', 
		genre:'#Chanson #Arménie',
		websiteURL:'https://www.lamastrock.com/dan-gharibian-trio/',
		facebookURL: 'https://www.facebook.com/DanGharibianTrio',
		description:"Si Bratsch fut le fer de lance de la musique tsigane et de l’Est dans les années 1980/90 et jusqu’à cette date fatidique du 31 décembre 2015 où ils arrêtèrent de sillonner le monde, Dan Gharibian en est une des figures emblématiques. Santiags jamais quittées, élégance orientale, une “tronche” remarquable entre toutes et surtout une Voix. Une voix qui semble avoir absorbé toutes les fumées des bars de rébétiko, frottée à l’arak et à la vodka; une voix qui chante les chansons et ballades tsiganes, arméniennes, russes, le blues grec. Alors bienvenue à ce nouveau trio qui réunit Benoit Convert des “Doigts de l’homme” et Antoine Girard, enfant de la balle , nourri dès son plus jeune âge de ces ballades.",
		cover: <Img fluid={data.dan.childImageSharp.fluid} />,
		video:'https://www.youtube.com/embed/o6UkurBQ6IA',
	},
	{ 
		name:"Guaracha Sabrosa",
		heure:'Mercredi : 23h30',
		genre:'#SonCubano #Lyon', 
		websiteURL:'https://soundcloud.com/guarachasabrosa',
		facebookURL: 'https://www.facebook.com/guarachasabrosa/',
		description:'Dans le vaste univers des musiques cubaines, le son cubano occupe une place centrale. Né dans la partie orientale de l’île, c’est lui qui a donné naissance à la salsa, et ce sont sur des rythmes de son que dans le monde entier on danse depuis plus d’un siècle en songeant à Cuba. Avec une énergie festive et tropicale, Guaracha sabrosa propose un cocktail torride de sones cubains pour que les corps oscillent et vacillent les uns contre les autres...',
		cover: <Img fluid={data.guaracha.childImageSharp.fluid} />,
		video:'https://www.youtube.com/embed/Wzk3lWHWEE8',
	},
	
	{ 
		name:"Léïla Festa : ON/OFF",
		heure: "Mardi et mercredi",
		genre:'#Exposition', 
		websiteURL:'https://www.redbubble.com/fr/people/festal/shop?asc=u',
		facebookURL: 'https://www.facebook.com/FESTA-L%C3%A9%C3%AFla-Productions-111402553818515/',
		description:"Jeune artiste diplomée des Beaux Arts de Grenoble-Valence en 2016, Léïla FESTA se définit comme peintre \"lumineux\" car l'exposition que vous allez voir a pour moteur la lumière. Les tableaux que vous allez découvrir vous surprendront une fois allumés dans le noir. Entrée libre !",
		cover: <Img fluid={data.leila.childImageSharp.fluid} />,
		video:'',
	}
]
return (
  <Layout>
    <SEO 
    title="Programmation Les Parenthèses de l'Oule 2021" 
    keywords={[`festival`, `rock on the l'oule`, `la motte chalancon`,`rock`,`musique`,`spectacle`,`concert`,'antibalas']} 
    description="Les 3 et 4 août 2021, prenez les routes sinueuses qui mènent à la Motte Chalancon, on s'occupe du reste ! C'est à la Motte Chalancon que ça se passe ! Au programme : concerts, expo, détente, jeux en bois, produits locaux et buvette, démarche éco-responsable. On compte sur vous !"
     image={data.seo.childImageSharp.resize}
     />
 	<Container text first>		    
	    <h1>Programmation</h1>
	     <h2>Mardi 3 & Mercredi 4 août 2021</h2>
	     <p>C'est à la Motte Chalancon que ça se passe ! Au programme : concerts, expo, détente, jeux en bois, produits locaux et buvette, démarche éco-responsable. On compte sur vous !</p>
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
	    <p>Les 3 et 4 août 2021, prenez les routes sinueuses qui mènent à la Motte Chalancon, on s'occupe du reste !</p>
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

 		suissa:file(relativePath: { eq: "programmation/suissa.jpg" }) {
	          childImageSharp {
	            fluid(maxWidth: 1500, quality:98) {
	              ...GatsbyImageSharpFluid
	            }
	          }
	    }

	    dan:file(relativePath: { eq: "programmation/cover-dan.jpg" }) {
	          childImageSharp {
	            fluid(maxWidth: 1500, quality:98) {
	              ...GatsbyImageSharpFluid
	            }
	          }
	    }

	    guaracha:file(relativePath: { eq: "programmation/guaracha.jpg" }) {
	          childImageSharp {
	            fluid(maxWidth: 1500, quality:98) {
	              ...GatsbyImageSharpFluid
	            }
	          }
	    }
	    leila:file(relativePath: { eq: "programmation/leila2.jpg" }) {
	          childImageSharp {
	            fluid(maxWidth: 1500, quality:98) {
	              ...GatsbyImageSharpFluid
	            }
	          }
	    }

	    lacaille:file(relativePath: { eq: "programmation/lacaille.jpg" }) {
	          childImageSharp {
	            fluid(maxWidth: 1500, quality:98) {
	              ...GatsbyImageSharpFluid
	            }
	          }
	    }

	    lucia:file(relativePath: { eq: "programmation/Lucia & Melys-4-2.jpg" }) {
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