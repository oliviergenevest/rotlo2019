import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { StaticQuery, graphql, Link/*, PageRenderer */ } from 'gatsby'
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
        logoGrandBureau: file(relativePath: { eq: "grand-bureau.png" }) {
          childImageSharp {
                  fixed(width: 200, quality:80) {
                    ...GatsbyImageSharpFixed
                  }
                }
        }
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
        <Container fluid wrapSponsor>
          <Container grandBureau>
              <Img fixed={data.logoGrandBureau.childImageSharp.fixed} style={{maxWidth: '200px',marginBottom:'2rem'}}/>
              <p>Rock On The l’Oule fait parti du Grand Bureau. Grand Bureau est un réseau né de la fusion de la FEPPRA, du GRADA, du GRAL et de Tagada Tsoin Tsoin. Lancé officiellement fin janvier 2017, il coordonne une nouvelle dynamique de coopération entre les acteurs de la filière musiques actuelles. Grand Bureau est le réseau des acteurs musiques actuelles en Auvergne-Rhône-Alpes. Il regroupe à ce jour plus de 160 structures membres de l’ensemble de la filière des musiques actuelles, et leur donne un cadre de coopération.</p>
              <p><a target="_blank" rel="noopener noreferrer" href="http://grandbureau.fr/">http://grandbureau.fr/</a></p>  
          </Container>
          <Container  sponsor> 
           
                <p>Rock On The l’Oule est soutenu par la Communauté des Communes du Diois, le Conseil Général de la Drôme (cantons de la Motte et de Rémuzat), des communes de la Motte Chalancon, de Cornillon sur l’Oule et des alentours.</p>
                <div className="logoContainer">
                   <Img fixed={data.logoDrome.childImageSharp.fixed} style={{maxWidth: '100px',marginBottom:'2rem'}}/>   
                  {/*} <Img fluid={data.logoLabelfolie.childImageSharp.fluid} style={{maxWidth: '100px',marginBottom:'2rem'}}/>*/}
                </div>
             
          </Container>  
        </Container>  

        <footer>
          <Container fluid footer >
              <span><Link to="/credits">Crédits</Link></span>
              <span>Tous droits réservés - Association Rock On The L'Oule - 2019</span>
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
