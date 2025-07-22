import React, {  useState }  from 'react'
import { Link } from 'gatsby'
import {GatsbyImage} from 'gatsby-plugin-image'

import * as styles from './GridArtisteItem.module.scss'
import cx from 'classnames'
import Video from '../video'
import styled from 'styled-components'
import { useSpring,  animated } from 'react-spring'

/*const Content =  styled.div`
	padding:4rem;
	@include for-phone-only { 
		padding:1rem!important;
	}

`*/


const GridArtiste = ({artiste=null}) => {
    const [artisteOpen, setArtisteOpen] = useState(false);
	
	
	const props = useSpring({
		
		opacity: artisteOpen ? 1 : 0,
		position: "relative",
	
		config: {
			mass: 1,
			friction: 1,
			tension: 0,
		  },
		backgroundColor: "#806290",
		maxHeight: artisteOpen ? "300vh": "0",
		height: artisteOpen ? "auto" :"auto",
		zIndex: artisteOpen ? 200 : 0,
		//width: "100%",
	});
	
	 
	
      return (

				<div key={artiste.id} className={styles.item} onClick={() => setArtisteOpen(!artisteOpen)}>
					<GatsbyImage image={artiste.visuel.gatsbyImageData} alt={artiste.name}/>
					<span>{artiste.name} </span>
				
				<animated.div style={props}>
				  <div className={styles.content} >
							<h1>{artiste.name}</h1>
							
			        		<p className={styles.tags}>{artiste.genre}</p>
							<div
								dangerouslySetInnerHTML={{__html: artiste.description}}
							/>
							{artiste.video  && <Video 
								videoTitle = {artiste.name}
								videoSrcURL = {artiste.video.url}
							/>
							}

{(artiste.websiteUrl || artiste.facebookUrl || artiste.instagramUrl) &&	<p><br/>En savoir plus :</p> }
							<div className={styles.socials}>
							{artiste.websiteUrl &&	<a href={artiste.websiteUrl} target="_blank" rel="noopener noreferrer">Site internet</a> 
							}
							{artiste.facebookUrl &&
							<a href={artiste.facebookUrl} target="_blank" rel="noopener noreferrer">Page Facebook</a> 
}
							{artiste.instagramUrl &&
								<a href={artiste.instagramUrl} target="_blank" rel="noopener noreferrer">Page Instagram</a>
}
						</div>
						
		        		</div>
						<button className="openButton btn" onClick={() => setArtisteOpen(!artisteOpen)}>
							{artisteOpen ? "Fermer" : "Ouvrir"}
						</button>
				</animated.div> 
				</div>
		
      )
}

export default GridArtiste