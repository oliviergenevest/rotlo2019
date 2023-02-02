import React from 'react'
/*import { Link } from 'gatsby'
import {GatsbyImage} from 'gatsby-plugin-image'*/
import * as styles from './GridFlex.module.scss'


const GridFlex = ({children}) => {

   
   
      return (
      
      	<div className= {styles.gridContainer} >
	{children}
      	</div>
     
      )
}

export default GridFlex