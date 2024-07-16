import React from 'react'
import * as styles from './GridArtistContainer.module.scss'

const GridArtistContainer = ({children}) => {

      return (
      
      	<div className= {styles.gridArtistContainer} >
                  {children}
      	</div>
     
      )
}

export default GridArtistContainer

