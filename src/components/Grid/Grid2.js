import React from 'react'
/*import { Link } from 'gatsby'
import Img from 'gatsby-image'*/
import { Fade } from "react-reveal"
import styles from './Grid2.module.scss'
import cx from 'classnames'

const Grid2 = ({image, text, title, reverse = false}) => {

   	const classes = cx(styles.content, { [styles.reverse]: reverse })
    const direction = {reverse} ? "left":"right"
      return (
      	<Fade up distance="50px">
      	<div className= {styles.gridContainer} >
		<div className={classes}>
	       <div className= {styles.text} >
	       <h2>{title}</h2>
	        <p>{ text.text }</p>
	       </div>
			
		       <div className= {styles.image} > 
		      	{image}
		       </div>
		     
	    </div>
      </div>
      </Fade>
      )
}

export default Grid2