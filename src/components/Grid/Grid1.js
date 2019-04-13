import React from 'react'
/*import { Link } from 'gatsby'
import Img from 'gatsby-image'*/
import ScrollDownAnimation from '../ScrollDownAnimation/ScrollDownAnimation'
import { Fade } from "react-reveal"
import HeadShake from 'react-reveal/HeadShake'
import styles from './Grid1.module.scss'





const Grid1 = ({image, text1, heroText, text3, flyer}) => (
    <div className= {styles.gridContainer} >
	   
	     <div className= {styles.flyer} > 
      		<Fade delay={800}><HeadShake  delay={1500}>{flyer} 	</HeadShake></Fade>
        </div>	
       	
        <div className= {styles.image}> 
      	{image} 
        </div>	
        <div className= {styles.bgDots} ></div>		
		<div className= {styles.bgGradient} ></div>
		<div className={styles.contentWrapper} >  
	        <div className= {styles.hero}>
	          <Fade up  delay={300} distance="10px">
	           <h1 className= {styles.title}>Festival<br/>{ heroText.text }</h1>
	          </Fade>         
	        </div>
	        <div className= {styles.subTitle} >
		        <Fade up  delay={400} distance="10px">
		        	<h2>{ text1.text }</h2>
		        </Fade>      
	        </div>
			<div className= {styles.description} >
	          	<Fade up  delay={500} distance="10px">
	       		 	<p>{ text3.text }</p>
	           	</Fade>
	       </div>
	    </div> 
	    <div className= {styles.scrollDown} >
           <Fade down  delay={1000} distance="10px"><ScrollDownAnimation/></Fade>
        </div>      
    </div>
 
)

export default Grid1