import React from 'react'
import {GatsbyImage} from 'gatsby-plugin-image'


import * as styles from './GridImage.module.scss'

const GridImage = ({images}) => {
//	console.log({images})
	  const imgList = images.edges
 return (

<div className={styles.gridContainer}>
      {imgList.map( (image,key) => ( 
        <div key={key} className= {styles.gallery__img}> 
      		<GatsbyImage image={image.node.childImageSharp.gatsbyImageData} alt="Rock on the l'Oule - Retour sur l'édition 2022"/>
	    </div> 
	             
           )
      )
       }     
</div>
	)
}


export default GridImage