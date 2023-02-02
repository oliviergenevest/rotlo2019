import React from 'react'
/*import { Link } from 'gatsby'
import {GatsbyImage} from 'gatsby-plugin-image'*/

import * as styles from './Grid2.module.scss'
import cx from 'classnames'
import Video from '../video'


const Grid2 = ({image, text, title, reverse = false, artiste=null}) => {

   	const classes = cx(styles.content, { [styles.reverse]: reverse })
    
      return (

      	
      	<div className= {styles.gridContainer} >
			<div className={classes}>
		       <div className= {styles.text} >
		       		<h2>{title}</h2>
		        	<p>{ text.text }</p>
		        	
		        	{artiste && 
		        		<div style={{zIndex:0}}>
			        		<p className={styles.tags}>{artiste.genre}</p>
							
							{artiste.video !== "" && <Video 
								videoTitle = {artiste.name}
								videoSrcURL = {artiste.video}
							/>
					}

							<p><br/>En savoir plus : <br/>
								<a href={artiste.websiteURL} target="_blank" rel="noopener noreferrer">Site internet</a> { } - { } 
								<a href={artiste.facebookURL} target="_blank" rel="noopener noreferrer">Page Facebook</a>
							</p>
							
		        		</div>
		        	}
					

		       </div>		
		       <div className= {styles.image} > 
		      		{image}
		       </div>     
		    </div>
      	</div>
      
     
      )
}

export default Grid2