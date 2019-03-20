import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql, Link, PageRenderer  } from 'gatsby'
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
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
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
          <Container text  > 
            <p>Rock On The l’Oule est soutenu par la Communauté des Communes du Diois, le Conseil Général de la Drôme (cantons de la Motte et de Rémuzat), des communes de la Motte Chalancon, de Cornillon sur l’Oule et des alentours.</p>
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
