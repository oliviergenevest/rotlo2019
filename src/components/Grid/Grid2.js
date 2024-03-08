import React from 'react'
/*import { Link } from 'gatsby'
import {GatsbyImage} from 'gatsby-plugin-image'*/

import * as styles from './Grid2.module.scss'
import cx from 'classnames'
import Video from '../video'


const Grid2 = ({image, text, title, reverse = false, artiste=null, evenement=null}) => {

   	const classes = cx(styles.content, { [styles.reverse]: reverse })
    
      return (

      	
      	<div className= {styles.gridContainer} >
			<div className={classes}>
		       <div className= {styles.text} >
		       		
		        	{evenement && 
		        		<div style={{zIndex:0}}>
			        		<p className={styles.date}>{evenement.date}</p>
							<h2><a href={evenement.slug} >{evenement.titre}</a></h2>
							<div
								dangerouslySetInnerHTML={{__html: evenement.teaser}}
							/>
							<p>
								<a href={evenement.slug} >En savoir plus</a> 
							</p>
		        		</div>
		        	}
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