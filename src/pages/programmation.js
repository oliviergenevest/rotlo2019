import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import Container from '../components/Container/Container'
import { Seo } from '../components/seo'
import GridArtisteItem from '../components/Grid/GridArtisteItem'
import GridArtisteContainer from '../components/Grid/GridArtistContainer'

import { StructuredText, renderNodeRule } from 'react-datocms'
import { isParagraph } from 'datocms-structured-text-utils'


const Programmation = () => {
const data = useStaticQuery(query)
console.log(data.page)
/*const artistes = [
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

]*/
return (
  <Layout>
	<Container banner>
		<GatsbyImage image={data.page.bannerImage.gatsbyImageData} alt={data.page.title} />
		<h1>{data.page.title}</h1>
	</Container>
 	<Container text first>		    
	    
	   
  { 
  console.log(data.page.content)}
    <StructuredText
      data={data.page.content}
      renderInlineRecord={({ record }) => {
        switch (record.__typename) {
          case 'DatoCmsArtiste':
            return	<GridArtisteItem
		 artiste={record} 
		 />
          default:
            return null;
        }
      }}
	  
	 

      renderLinkToRecord={({ record, children }) => {
        switch (record.__typename) {
          case 'DatoCmsArtiste':
         return <a href={`/article/${record.name}`}>{children}</a>;
          default:
            return null;
        }
      }}

      renderBlock={({ record }) => {
		
        switch (record.__typename) {
          case 'DatoCmsProg':
            return (
				<GridArtisteContainer>
					{record.artistes2024.map((artiste, key) => 
					<GridArtisteItem
					key={artiste.id} 
						artiste={artiste} 
						/>
					)
					}
					
				</GridArtisteContainer>
			)
			;
		default:
				return (
				  <>
					<p>Don't know how to render a block!</p>
					<pre>{JSON.stringify(record, null, 2)}</pre>
				  </>
				)
        }
      }}
    />

</Container>
	
	<Container text >		    
	    <GatsbyImage image={data.flyer.childImageSharp.gatsbyImageData} style={{'maxWidth':'400px'}} alt="flyer"/>
	</Container>

  </Layout>
  )
}

export default Programmation

// TODO : utiliser les props de la page en parametre du composant Seo pour recuperer les infos de datocms
export const Head = () => (
	<Seo title="Programmation - Le Champ des Ondes 2025" 
	description="Le Festival Le Champ des Ondes, c'est des concerts, des jeux en bois, des produits locaux et buvette, une démarche éco-responsable."
  />
  )
  



				

export const query = graphql`
	query progQuery{
		page: datoCmsProgrammation {
			title
			bannerImage {
				gatsbyImageData(placeholder: BLURRED, layout:FULL_WIDTH, imgixParams: {auto: "compress,enhance,format",fit: "crop", w: "800", h: "600"})
			}
			content {
				value
				blocks {
					__typename
          			id: originalId
					... on DatoCmsProg {
						id: originalId
						artistes2024 {
							id
							name
							description
							
							facebookUrl
							websiteUrl
							instagramUrl
							video {
								url
								title
							}
							visuel {  
								gatsbyImageData(imgixParams: {auto: "compress,enhance,format", h:"300", w:"918", fit: "crop" })
							}
						}
					}
				}
				links {
				  __typename
				  ... on DatoCmsArtiste {
					id: originalId
					name
					description
					facebookUrl
					websiteUrl
					instagramUrl
					video {
						url
						title
					}
					visuel { 
						gatsbyImageData (placeholder: BLURRED, imgixParams: {auto: "compress,enhance,format", h:"300", w:"1000"})
					}
				  }
				}
				
			  }

		}
	    flyer: file(relativePath: { eq: "programmation/champdesondes.png" }) {
	          childImageSharp {
				gatsbyImageData(width:400)
	           
	          }
	    }

 		boldcircus:file(relativePath: { eq: "programmation/boldcircus.jpg" }) {
	          childImageSharp {
				gatsbyImageData(width:1500)
	           
	          }
	    }

	    transkabar:file(relativePath: { eq: "programmation/transkabar.jpg" }) {
	          childImageSharp {
				gatsbyImageData(placeholder: BLURRED, layout:FULL_WIDTH)
	           
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


	    seo: file(relativePath: { eq: "programmation/champdesondes.png" }) { 
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