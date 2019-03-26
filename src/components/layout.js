import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { StaticQuery, graphql, Link/*, PageRenderer */ } from 'gatsby'
import { FaFacebook } from 'react-icons/fa'
import config from '../config/SiteConfig'
import Navigation from './Navigation/Navigation'
import Container from './Container/Container'
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
        logoLabelfolie: file(relativePath: { eq: "logo_labelfolie.png" }) {
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
        </main>

        <Container  sponsor>           
          <div className="logoContainer">
             <Img fixed={data.logoDrome.childImageSharp.fixed} style={{maxWidth: '100px',marginBottom:'2rem'}}/>   
            {/*} <Img fluid={data.logoLabelfolie.childImageSharp.fluid} style={{maxWidth: '100px',marginBottom:'2rem'}}/>*/}
          </div>
          <p>Rock On The l’Oule est soutenu par la Communauté des Communes du Diois, le Conseil Général de la Drôme (cantons de la Motte et de Rémuzat), des communes de la Motte Chalancon, de Cornillon sur l’Oule et des alentours.</p>
        </Container>  

        <footer>
          <Container fluid footer >
              <span> <a href={config.facebookPageUrl} aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={20} style={{ }}  />
                </a></span>
              <span>Association Rock On The L'Oule - 2019 - <Link to="/credits">Crédits</Link></span>
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
