import React from 'react'
/*import { Link } from 'gatsby'
import Img from 'gatsby-image'*/
import styles from './GridFlex.module.scss'


const GridFlex = ({children}) => {

   
   
      return (
      
      	<div className= {styles.gridContainer} >
	{children}
      	</div>
     
      )
}

export default GridFlex