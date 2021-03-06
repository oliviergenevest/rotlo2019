import React from 'react'
import Img from 'gatsby-image'
import { Fade } from "react-reveal"
import styles from './GridImage.module.scss'

const GridImage = ({images}) => {
	console.log({images})
	  const imgList = images.edges
 return (

<div className={styles.gridContainer}>
      {imgList.map( (image,key) => ( 
        <div className= {styles.gallery__img}> 
      		<Img fluid={image.node.childImageSharp.fluid} alt="Rock on the l'Oule - Edition 2020"/>
	    </div> 
	             
           )
      )
       }     
</div>
	)
}
	

	 



export default GridImage


  {/* <div className={styles.gridContainer}>      {images.map( (image,key) => ( 
          <div className= {styles.gallery__img}> 
      		<Img fluid={image.node.childImageSharp.fluid} alt="Rock on the l'Oule - Edition 2020"/>
	    </div> 
	             
           )
       }     
	    </div>*/}