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
import 'typeface-montserrat'
import 'typeface-raleway'
import styles from './layout.module.scss'
/*import AudioPlayer from '../components/Player/player'*/




const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {       
        logoDrome: file(relativePath: { eq: "logo_drome.jpg" }) {
          childImageSharp {
                  fixed(width: 100, quality:80) {
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
      }  
    `}
    render={

      data => (
      
      <div className={styles.page}>   
        <Navigation/>
        <main className={styles.content} >
          {children} 
          <Container  text>
            <MailChimpSubscribe/>
          </Container>
          <Container  sponsor>           
            <div className="logoContainer">
               <Img fixed={data.logoDrome.childImageSharp.fixed} style={{maxWidth: '100px',marginBottom:'2rem'}}/>   
              
               <Img fixed={data.logoRegion.childImageSharp.fixed} style={{marginBottom:'2rem',marginLeft:'2rem'}}/>

            </div>
            <p>Rock On The l’Oule est soutenu par le Conseil Départemental de la Drôme, la Région Auvergne Rhône-Alpes, et les communes de Cornillon sur l'Oule, la Motte Chalancon, Rémuzat, St May, Arnayon et Rottier. </p>
          </Container>
         

        </main>
        
        <footer>
          <Container fluid footer >
              <span> <a href={config.facebookPageUrl} aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={20} style={{ }}  />
                </a></span>
              <span>Association Rock On The L'Oule - 2020 - <Link to="/credits">Crédits</Link></span>
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
