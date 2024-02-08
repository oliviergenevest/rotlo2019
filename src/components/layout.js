import React from 'react'

import {GatsbyImage} from 'gatsby-plugin-image'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { FaFacebook } from 'react-icons/fa'
import config from '../config/SiteConfig'
import Navigation from './Navigation/Navigation'
import Container from './Container/Container'
import MailChimpSubscribe from './mailchimp-subscribe'
/*import Header from './header'*/
import "@fontsource/montserrat";
import "@fontsource/montserrat/900.css";
import 'typeface-raleway'
import * as styles  from './layout.module.scss'
/*import AudioPlayer from '../components/Player/player'*/
//import  ModalRotlo  from './modal';



const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
  query {       
    logoDrome: file(relativePath: { eq: "logo_drome.jpg" }) {
      childImageSharp {
              gatsbyImageData (width:80, quality:80 )     
      }
    }
    logoRegion: file(relativePath: { eq: "logo_region.png" }) {
      childImageSharp {
        gatsbyImageData ( height:80)
      }
    }
   
    logoDrac: file(relativePath: { eq: "logo_drac.png" }) {
      childImageSharp {
        gatsbyImageData (width: 80 , quality:80 )
      }
    }
    logoEteCulturel: file(relativePath: { eq: "logo_ete_culturel_2022.jpg" }) {
      childImageSharp {
        gatsbyImageData (width:150)
      }
    }
  }  
`
  )
    return (
      
      <div className={styles.page}>   
        
        <Navigation/>
      
        <main  >
       {/*  <ModalRotlo/> */}
          {children} 
          <Container  text>
            <MailChimpSubscribe/>
          </Container>
          <Container  sponsor>           
            <div className="logoContainer">
              <GatsbyImage image={data.logoDrac.childImageSharp.gatsbyImageData} style={{marginBottom:'2rem',marginLeft:'.5rem'}} alt=""/>
              <GatsbyImage image={data.logoEteCulturel.childImageSharp.gatsbyImageData} style={{marginBottom:'2rem',marginLeft:'.5rem'}} alt=""/>
              <GatsbyImage image={data.logoRegion.childImageSharp.gatsbyImageData} style={{marginBottom:'2rem',marginLeft:'.5rem'}} alt=""/>
              <GatsbyImage image={data.logoDrome.childImageSharp.gatsbyImageData} style={{maxWidth: '100px',marginBottom:'2rem', marginLeft:'.5rem'}} alt=""/>   
            </div>
            <p>Ce projet est soutenu dans le cadre du dispositif « Eté Culturel » du Ministère de la Culture, par la Région Auvergne Rhône-Alpes, le Conseil Départemental de la Drôme  et les communes de la Motte Chalancon, Cornillon sur l'Oule et Rottier. 
</p>

          </Container>
         

        </main>
        
        <footer>
          <Container fluid footer >
              <span> <a href={config.facebookPageUrl} aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={20} style={{ }}  />
                </a></span>
              <span>Association Rock On The L'Oule - 2023 - <Link to="/credits">Crédits</Link></span>
          </Container>
        </footer>
     </div>
    )
 
    }

export default Layout