import React from 'react'
import { Link } from 'gatsby'
/*
import Img from 'gatsby-image'*/
import ScrollDownAnimation from '../ScrollDownAnimation/ScrollDownAnimation'
import Slideshow from '../Slideshow'
import { Fade } from "react-reveal"
//import HeadShake from 'react-reveal/HeadShake'
import styles from './Grid1.module.scss'
require('typeface-caveat-brush')




const Grid1 = ({image, text1, heroText, text3, text2, flyer, slidesData}) => (
    <div className= {styles.gridContainer} >
        <div className= {styles.image}> 
      	{/*image*/} 
      	<Slideshow slides={slidesData} />
		 
        </div>	
        <div className= {styles.bgDots} ></div>		
		<div className= {styles.bgGradient} ></div>
		<div className={styles.contentWrapper} >  
	        <div className= {styles.hero}>{flyer}
	          <Fade up  delay={300} distance="10px">
				
	           <h1 className= {styles.title}>{ heroText.text }</h1>
			 {/*  <span className={styles.slogan}>Les parenthèses de l'Oule #2</span> */}   
			  </Fade>
		
	          {/*    <div className= {styles.flyerMobile} > 
      				<Fade delay={800}><HeadShake  delay={1500}>{flyer} 	</HeadShake></Fade>
</div>	  */}       
	        </div>
	        <div className= {styles.subTitle} >
		        <Fade up  delay={400} distance="10px">

		        	<h2>{ text1.text }</h2>
		        		<p><Link to='/programmation' title="Voir la programmation détaillée" className= {styles.linkProg}>{ text2.text }</Link></p>
		        </Fade>      
	        </div>
		 {/*	<Fade delay={800}><a href="https://www.helloasso.com/associations/association-rock-on-the-l-oule/evenements/festival-rock-on-the-l-oule" className={styles.btnCta} target="_blank" rel="noreferrer noopener">Billetterie</a></Fade>
		 	<div className= {styles.description} >
	          	<Fade up  delay={500} distance="10px">
	       		 	<p>{ text3.text }</p>
	       		 
	           	</Fade>
	       </div>*/}  
	    </div> 
	  {/*   <div className= {styles.flyer} > 
      		<Fade delay={800}><HeadShake  delay={1500}>{flyer} 	</HeadShake></Fade>
        </div>	*/} 
	    <div className= {styles.scrollDown} >
           <Fade down  delay={1000} distance="10px"><ScrollDownAnimation/></Fade>
        </div>      
    </div>
 
)

export default Grid1