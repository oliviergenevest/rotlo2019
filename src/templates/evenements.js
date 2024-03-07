import React from 'react'
//import Helmet from 'react-helmet';
import {Seo} from '../components/seo';
import Container from '../components/Container/Container'

import Layout from '../components/layout'
import { GatsbyImage } from "gatsby-plugin-image"
import { graphql, Link} from 'gatsby'
import  * as styles from './evenements.module.scss'

import { FaAngleRight }  from 'react-icons/fa'
import { FaAngleLeft }  from 'react-icons/fa'


const Evenements = props => {
	const {  next, prev } = props.pageContext;
   const event = props.data.evenement;
console.log(event)
  


	return (
  <Layout>
      
   <GatsbyImage alt={event.titre} image = {event.visuel.gatsbyImageData} />
  <Container text>
 
 	


    <h1 className={styles.title}>{event.titre}</h1>
    <p className={styles.date}>{event.date}</p>
    <div dangerouslySetInnerHTML = {{__html:event.description}} />
    <br/>
   
      {      
        event.galerieimage.map((img, i) => (
            <div key={i} className={styles.galerieImage} >
               <GatsbyImage image = {img.gatsbyImageData} alt={event.titre} /> 
               
            </div>
        ))        
      }
     
   


</Container>


<Container text>
      <div  className={styles.projetNav} >

       

         
        {
          prev &&   <div  /*className={styles.previous}*/>
                      <FaAngleLeft  style={{ verticalAlign: 'middle', marginBottom: '.2rem' }} />
                      <span> Précédent</span>
                      <Link to={'/agenda/'+prev.slug}>
                        <span> {prev.titre}</span>
                        <GatsbyImage  alt={prev.titre} className={styles.imgProjetNavigation} image = {prev.visuel.gatsbyImageData}
                        />
                      </Link>
                    </div>
        }
         {
         
          next &&  <div  className={styles.next} >
                    
                    
                      <span>Suivant</span>
                        <FaAngleRight  style={{ verticalAlign: 'middle',marginBottom: '.2rem' }} />
                      <Link to={'/agenda/'+next.slug}>
                        <span>{next.titre}</span> 
                        <GatsbyImage alt={next.titre} className={styles.imgProjetNavigation} image = {next.visuel.gatsbyImageData}

                      />
                      </Link> 
                  </div>
        }
        
         </div>
       </Container>
</Layout>
)
}
export default Evenements


export const Head = (props) => (
  <Seo 
  description={props.data.evenement.teaser}
  title={props.data.evenement.titre}
/>
)

export const pageProjetQuery = graphql`
  query ProjectPostBySlug($slug: String!) {

    evenement: datoCmsEvenement( slug: { eq: $slug } ) {
        slug
        description
        teaser
        visuel {
            gatsbyImageData(width:1900, height:600)
        }
        galerieimage {
          gatsbyImageData(width:816)
        }
        date(locale: "fr", formatString: "dddd DD MMMM YYYY")
        titre
       
    }
  }
`;
