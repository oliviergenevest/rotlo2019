import React from 'react'
import { Link } from 'gatsby'
/*
import {GatsbyImage} from 'gatsby-plugin-image'*/
import ScrollDownAnimation from '../ScrollDownAnimation/ScrollDownAnimation'
import Slideshow from '../Slideshow'

import * as styles from './Grid1.module.scss'
require('typeface-caveat-brush')




const Grid1 = ({text1, heroText, text3, text2, slidesData}) => (
    <div className= {styles.gridContainer} >
        <div className= {styles.image}> 
      	
      	<Slideshow slides={slidesData} />
		 
        </div>	
        <div className= {styles.bgDots} ></div>		
		<div className= {styles.bgGradient} ></div>
		<div className={styles.contentWrapper} >  
	        <div className= {styles.hero}>
	
				
	           <h1 >{ heroText.text }</h1>
			
	        </div>
	        <div className= {styles.subTitle} >
		      

		        	<h2>{ text1.text }</h2>
		        		<p><Link to='/programmation' title="Voir la programmation détaillée" className= {styles.linkProg}>{ text2.text }</Link></p>
		            
	        </div>
	
	    </div> 
	  {/*   <div className= {styles.flyer} > 
      		{flyer} 	
        </div>	*/} 
	    <div className= {styles.scrollDown} >
           <ScrollDownAnimation/>
        </div>      
    </div>
 
)

export default Grid1