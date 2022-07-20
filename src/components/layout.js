import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { StaticQuery, graphql, Link/*, PageRenderer */ } from 'gatsby'
import { FaFacebook } from 'react-icons/fa'
import config from '../config/SiteConfig'
import Navigation from './Navigation/Navigation'
import Container from './Container/Container'
import MailChimpSubscribe from './mailchimp-subscribe'
/*import Header from './header'*/
import "@fontsource/montserrat";
import "@fontsource/montserrat/900.css";
import 'typeface-raleway'
import styles from './layout.module.scss'
/*import AudioPlayer from '../components/Player/player'
import  ModalRotlo  from './modal';*/



const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {       
        logoDrome: file(relativePath: { eq: "logo_drome.jpg" }) {
          childImageSharp {
                  fixed(width: 80, quality:80) {
                    ...GatsbyImageSharpFixed
                  }
                }
        }
        logoRegion: file(relativePath: { eq: "logo_region.png" }) {
          childImageSharp {
                  fixed(width: 250, quality:80) {
                    ...GatsbyImageSharpFixed
                  }
                }
        }
       
        logoDrac: file(relativePath: { eq: "logo_drac.png" }) {
          childImageSharp {
                  fixed(width: 80, quality:80) {
                    ...GatsbyImageSharpFixed
                  }
                }
        }
        logoEteCulturel: file(relativePath: { eq: "logo_ete_culturel_2022.jpg" }) {
          childImageSharp {
                  fixed(width: 150, quality:80) {
                    ...GatsbyImageSharpFixed
                  }
                }
        }
      }  
    `}
    render={

      data => (
      
      <div className={styles.page}>   
        
        <Navigation/>
      
        <main className={styles.content} >
      {/*  <ModalRotlo/> */}
          {children} 
          <Container  text>
            <MailChimpSubscribe/>
          </Container>
          <Container  sponsor>           
            <div className="logoContainer">
              <Img fixed={data.logoDrac.childImageSharp.fixed} style={{marginBottom:'2rem',marginLeft:'.5rem'}}/>
              <Img fixed={data.logoEteCulturel.childImageSharp.fixed} style={{marginBottom:'2rem',marginLeft:'.5rem'}}/>
              <Img fixed={data.logoRegion.childImageSharp.fixed} style={{marginBottom:'2rem',marginLeft:'.5rem'}}/>
              <Img fixed={data.logoDrome.childImageSharp.fixed} style={{maxWidth: '100px',marginBottom:'2rem', marginLeft:'.5rem'}}/>   
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
              <span>Association Rock On The L'Oule - 2022 - <Link to="/credits">Crédits</Link></span>
          </Container>
        </footer>
     </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
