import React from 'react'
/*import { Link } from 'gatsby'*/
import Img from 'gatsby-image'
import Layout from '../components/layout'
import Container from '../components/Container/Container'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import Grid1 from '../components/Grid/Grid1'
import Grid2 from '../components/Grid/Grid2'
/*import GridImage from '../components/Grid/GridImage'*/
/*import TimelineProg from '../components/timeline'*/
import RandomImage from '../components/RandomImage'
/*import JavaVideoMp4 from '../images/java.mp4'*/

const IndexPage = ({data}) => {
   return (
      <Layout>
          <SEO title="Festival Rock on the l'Oule 2022" 
          keywords={[`festival`, `rock on the l'oule`, `la motte chalancon`,`rock`,`musique`,`spectacle`,`concert`]} 
          description="Festival Rock On the l'Oule - Mercredi 3 août 2022 - TRANS KABAR - Banan'N Jug - Imperial Kikiristan - Bold Circus - Smokey Joe & The Kid (DJ Set)" 
          image={data.seo.childImageSharp.resize}/>
          <Grid1 
            image = { <RandomImage gatsbyImageArray={data.edition2022Gallery}/> } 
            slidesData = {data.edition2022Gallery}
            flyer = {<Img fluid={data.flyer.childImageSharp.fluid} />}
            heroText = {{text:'Rock on the l\'Oule #26'}} 
            text1= {{text:"Mercredi 3 août 2022 - La Motte Chalancon (26)"}} 
            text2= {{text:"TRANS KABAR - Banan N Jug - Imperial Kikiristan - Bold Circus - Smokey Joe & The Kid (DJ Set)"}} 
            text3= {{text:"On compte sur vous !"}} 
          />
        
          {/*<TimelineProg/>*/}
{/*
<Container text first> 
 <h1>Festival Rock on the l'Oule</h1>
  <p>Votre petit festival rural et génial est dans ses petits souliers. Désarçonné par ces événements sanitaires et leurs conséquences qui nous dépassent largement.</p>
  <p>Dans ce contexte trop incertain, nous excluons avec regret la possibilité d’organiser une 26ème édition cet été.</p>
  <p>Nous avons le cœur gros d’abandonner ici toute la préparation du Festival - fruit de l’échange depuis plusieurs mois avec tous nos bénévoles - que nous souhaitions cette année encore international, avec des artistes venus du Royaume Uni et de La Réunion.</p>
  <p>Cependant nous sommes toujours animés par ce besoin vital de lien social, et l’envie furieuse de partage et de rencontres, aujourd’hui peut-être plus encore nécessaires dans cette longue période d’isolement.</p>
  <p>Prolongeant notre réflexion tout en guettant l’évolution de la situation sanitaire, économique et sociale, nous espérons pouvoir vous proposer cet été une forme culturelle alternative qui ait du sens, sur le plan d’eau du Pas des Ondes ou ailleurs.</p>
  <p>On vous en dit plus courant juillet !</p>

  <p>Portez-vous bien les amis, on pense fort à vous !</p>
 </Container>
 
<Container text first> 
 <h2>Les parenthèses de l'Oule #2</h2>
 <p>Depuis de longs mois, on a cherché, tourné et retourné dans tous les sens comment s’adapter à la situation sanitaire tout en respectant l’essence du festival. Et bon ben, sur une édition traditionnelle respecter les protocoles sanitaires actuels c’est plutôt compliqué...visez un peu :
</p>
<p>
<i>JAVA @ Rock on the l’Oule 2010</i>
<video controls autoPlay playsInline  muted={true} loop style={{width:'100%'}}> 
      <source src={JavaVideoMp4} type="video/mp4" />
    </video>
</p>
<p>Et en même temps, deux ans sans se voir c’est looooong.</p>
<p>Du coup on est pas peu fiers de t’avoir préparé une édition remaniée aux petits oignons, en attendant un
retour aux concerts rock and roll où les corps se déchainent, ruisselant de sueur.</p>
<p>On change de site, on change de nom, on change de format pour cette année transitoire, histoire de fêter
l’été, les rencontres humaines et artistiques et le plaisir d’etre ensemble.</p>
<p>
Les Parenthèses de l’Oule t’emmenèront début août à Cuba, en Arménie, à la Réunion !!
Une programmation éclectique sur 2 jours les mardi 03 et mercredi 04 août 2021. <Link to="/programmation">Programmation complète ici</Link>.</p>
<p>
On déménage dans le village de La Motte Chalancon, au jardin du Fort : Bel écrin en plein air
surplombant les toits du village. Repas complets préparés sur place par notre chef David avec des produits
locaux. Mais également snacking, buvette, jeux en bois et exposition d’oeuvres rétroéclairées. Viens ca va
être bien.</p>
<p>Attention places limitées !! Cette année on bloque à 200 places, autant dire qu’il faut pas trainer pour réserver ! <Link to="/billetterie">C’est par ici : Billetterie en ligne</Link></p>
<p>
On résume : cet été tu te régaleras de bons petits plats locaux sur la place du Fort du village de La Motte
Chalancon, mardi 03 et mercredi 04 août 2021, avant de te rincer les oreilles avec une programmation de
haute volée pendant que tes gosses prennent du bon temps sur les jeux en bois.</p>
<p>Les <i>Parenthèses de l’Oule</i> n’attendent plus que toi, alors <Link to="/billetterie">inscris-toi</Link> on se charge du reste !</p>

<p>La team Rock on the l’Oule</p>
   </Container>*/}
{/*
  <p>L’association Rock On The l’Oule est très heureuse de pouvoir proposer à nouveau des
événements suite à la crise sanitaire qui a largement affecté nos activités depuis plus d’un an.
Néanmoins, nous avons profité de ce temps pour nous organiser, dernière nos écrans, en
termes de budget, conseils d’administration, et autres réunions d’équipe pour remodeler notre
implantation sur le territoire.</p>
<p>
En 2020, nous avons été contraints d’organiser une soirée « à minima », dans un jardin privé,
avec une jauge limitée et en respectant les consignes sanitaires. Il y avait quelque chose de
féerique ce mercredi 05 août 2020 dans cette soirée insolite et intergénérationnelle sous les
étoiles, ci-dessous quelques clichés :
</p>
<GridImage images={data.edition2020Gallery}/>
<p>Pour cet été, les mardi 3 et mercredi 4 Aout 2021, nous prévoyons 2 soirées de concerts au
jardin du fort, au cœur du village de La Motte Chalancon. Ambiance festive et tout public,
avec repas complet proposé sur la place du Fort, buvette sur place, jeux en bois pour petits et
grands, et exposition de tableaux de la jeune artiste diplômée des Beaux-Arts de Valence,
Leïla Festa.</p>
<p>
Côté concerts, voici les premiers noms confirmés pour cette édition :
Ambiance latine avec le groupe de musique Cubaine : « Guaracha Sabrosa »
Chanson Française et Arménienne avec le « Dan Gharibian Trio ».</p>
<p>La programmation complète sera dévoilée début juillet, avec billetterie en ligne sur notre site
(attention, jauge limitée !). Merci au Département de la Drôme, à la Région Auvergne Rhône
Alpes et aux communes de la Motte Chalancon, de Cornillon et de Rottier pour leur soutien
inconditionnel.</p>
*/}

        <Container fluid first > 
        <Grid2 
            text={{text:"Deux plans d’eau posés au coeur des montagnes préalpines, à la frontière entre Diois et Baronnies. Un oasis dominé par les ruines du château médiéval de Cornillon et survolé par les hérons, vautours et autres spécimens de la faune locale."}}
              image={<Img fluid={data.siteExceptionnel.childImageSharp.fluid} />}
              title="Un lieu magique : le site du Pas des Ondes."
            /> 

          <Grid2 
            text={{text:"Dans une ambiance familiale rappelant les fêtes de village traditionnelles, Rock on the l’Oule propose une programmation artistique de premier choix faisant la part belle au métissage. Une rencontre entre les genres musicaux les plus variés et des artistes aux origines géographiques multiples. Mais aussi du cirque, des performances en tous genres, des jeux en bois, un salon de thé sous tentes berbères... De quoi rassembler toutes les générations de public et faire se rencontrer les cultures."}}
              image={<Img fluid={data.brassageCulture.childImageSharp.fluid} style={{width:'100%'}}/>}
              title="Un joyeux brassage de cultures"
              reverse
            />

          <Grid2 
                text={{text:"Bière locale, picodon, pain bio, jus de fruits artisanaux, saucisses, plat chaud... La buvette et le snack privilégient les circuits courts et les produits de qualité. Une occasion de découvrir ou redécouvrir la variété des richesses régionales. Par ailleurs, une attention particulière est accordée par l’organisation à la préservation du site et au respect de l’environnement : étude d’impact, tri des déchets, toilettes sèches, gobelets réutilisables... Enfin, un réel souci anime les organisateurs pour rendre la manifestation accessible au plus grand nombre. Cela se traduit notamment par la recherche de tarifs raisonnables et adaptés."}}
                image={<Img fluid={data.environnement.childImageSharp.fluid} />}
                title="Un festival durable et responsable."
                
            />

             <Grid2 
                text={{text:"Fait rare pour un festival qui dure depuis plus de vingt ans, son organisation est toujours le fait d’une équipe 100 % bénévole. Une bande de passionnés, attachée à la région, qui a su rassembler des énergies multiples et fidèles autour de ce projet au long cours. Aujourd’hui, ce sont près de 70 bénévoles et le soutien de nombreux habitants, associations et entreprises de la région qui permettent à cette aventure de se poursuivre."}}
                image={<Img fluid={data.benevoles.childImageSharp.fluid} />}
                title="Une aventure humaine et collective qui dure depuis... 26 ans."
                reverse
            />
          </Container> 
            <Container grandBureau>
              <Img fixed={data.logoGrandBureau.childImageSharp.fixed} style={{maxWidth: '200px',marginBottom:'2rem'}}/>
              <p>Rock On The l’Oule fait parti du Grand Bureau. Grand Bureau est un réseau né de la fusion de la FEPPRA, du GRADA, du GRAL et de Tagada Tsoin Tsoin. Lancé officiellement fin janvier 2017, il coordonne une nouvelle dynamique de coopération entre les acteurs de la filière musiques actuelles. Grand Bureau est le réseau des acteurs musiques actuelles en Auvergne-Rhône-Alpes. Il regroupe à ce jour plus de 160 structures membres de l’ensemble de la filière des musiques actuelles, et leur donne un cadre de coopération.</p>
              <p><a target="_blank" rel="noopener noreferrer" href="http://grandbureau.fr/">http://grandbureau.fr/</a></p>  
          </Container>
         
      </Layout>
)
}

export default IndexPage

export const query = graphql`
  query {

   

    placeholderImage: file(relativePath: { eq: "site.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1600, quality:80) {
              ...GatsbyImageSharpFluid
            }
          }
    }

    flyer: file(relativePath: { eq: "lesparenthesesdeloule.png" }) {
          childImageSharp {
            fluid(maxWidth: 600, quality:90) {
              ...GatsbyImageSharpFluid
              ...GatsbyImageSharpFluidLimitPresentationSize
            }
          }  
    }

    seo: file(relativePath: { eq: "lesparenthesesdeloule.png" }) { 
        childImageSharp {
            resize(width: 1200) {
              src
              height
              width
            }
          }
        }

    logoGrandBureau: file(relativePath: { eq: "grand-bureau.png" }) {
        childImageSharp {
                fixed(width: 200, quality:80) {
                  ...GatsbyImageSharpFixed
                }
              }
      }

   environnement: file(relativePath: { eq: "8.jpg" }) {
      childImageSharp {
            fluid(maxWidth: 1600, quality:80) {
              ...GatsbyImageSharpFluid
            }
          }
    }

    siteExceptionnel: file(relativePath: { eq: "pasdesondes.jpg" }) {
      childImageSharp {
            fluid(maxWidth: 1600, quality:80) {
              ...GatsbyImageSharpFluid
            }
          }
    }

    brassageCulture: file(relativePath: { eq: "brassage-culture.jpg" }) {
      childImageSharp {
            fluid(maxWidth: 1600, quality:80) {
              ...GatsbyImageSharpFluid
            }
          }
    }
    java: file(relativePath: { eq: "java.jpg" }) {
      childImageSharp {
            fluid(maxWidth: 800, quality:80) {
              ...GatsbyImageSharpFluid
            }
          }
    }
    benevoles: file(relativePath: { eq: "equipe1.jpg" }) {
      childImageSharp {
            fluid(maxWidth: 1600, quality:80) {
              ...GatsbyImageSharpFluid
            }
          }
    }

    edition2022Gallery: allFile (filter:{relativeDirectory:{eq:"edition2022"}, extension:{eq:"jpg"}}, sort: {fields: [name], order: DESC}){
    edges {
      node {
          childImageSharp {
            fluid(maxWidth: 2000, quality:80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`