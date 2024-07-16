import React from 'react'

import {GatsbyImage} from 'gatsby-plugin-image'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { FaFacebook } from 'react-icons/fa'
import config from '../config/SiteConfig'
import Navigation from './Navigation/Navigation'
import Container from './Container/Container'
import MailChimpSubscribe from './mailchimp-subscribe'
/*import Header from './header'*/
import "@fontsource-variable/montserrat";
import * as styles  from './layout.module.scss'
/*import AudioPlayer from '../components/Player/player'*/

import  ModalRotlo  from './modal';



const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
  query { 
    footer:datoCmsFooter {
      logos { gatsbyImageData(imgixParams: {h:"80", auto: "compress,enhance,format", q:30}) }
      texteFooter
    } 

  }  
`
  )
    return (
      
      <div className={styles.page}>   
        
        <Navigation/>
      
        <main  >
        <ModalRotlo/> 
          {children} 
          <Container  text>
            <MailChimpSubscribe/>
          </Container>
          <Container  sponsor>           
            <div className="logoContainer">
            { /* Liste des logos des partenaires financiers*/
              data.footer.logos.map((logo,i) => {
                return (
                  <GatsbyImage key={i} image={logo.gatsbyImageData} style={{marginBottom:'2rem',marginLeft:'.5rem'}} alt=""/>
                )
              })
            } 
            </div>
            <div
								dangerouslySetInnerHTML={{__html: data.footer.texteFooter}}
							/>
          

          </Container>
         

        </main>
        
        <footer>
          <Container fluid footer >
              <span> <a href={config.facebookPageUrl} aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={20} style={{ }}  />
                </a></span>
              <span>Association Rock On The L'Oule - 2024 - <Link to="/credits">Crédits</Link></span>
          </Container>
        </footer>
     </div>
    )
 
    }


  
     

export default Layout