import React, {  useState }  from 'react'
import { Link } from 'gatsby'
import {GatsbyImage} from 'gatsby-plugin-image'

import * as styles from './GridArtisteItem.module.scss'
import cx from 'classnames'
import Video from '../video'
import styled from 'styled-components'
import { useSpring,  animated } from 'react-spring'



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
		height: artisteOpen ? "100vh" :"0vh",
		zIndex: artisteOpen ? 200 : 0,
		width: "100%",
	});
	
	 
	
      return (

				<div key={artiste.id} className={styles.item} onClick={() => setArtisteOpen(!artisteOpen)}>
					<GatsbyImage image={artiste.visuel.gatsbyImageData} alt={artiste.name}/>
					<span>{artiste.name} {artisteOpen ? "open" : null}</span>
				
				<animated.div style={props}>
				  <div style={{"padding":"4rem"}}>
							<h1>{artiste.name}</h1>
							
			        		<p className={styles.tags}>{artiste.genre}</p>
							<div
								dangerouslySetInnerHTML={{__html: artiste.description}}
							/>
							{artiste.video !== "" && <Video 
								videoTitle = {artiste.video.title}
								videoSrcURL = {artiste.video.url}
							/>
							}

							<p><br/>En savoir plus : <br/>
								<a href={artiste.websiteUrl} target="_blank" rel="noopener noreferrer">Site internet</a> { } - { } 
								<a href={artiste.facebookUrl} target="_blank" rel="noopener noreferrer">Page Facebook</a> { } - { }
								<a href={artiste.instagramUrl} target="_blank" rel="noopener noreferrer">Page Instagram</a>
							</p>
						
		        		</div>
						<button className="openButton" onClick={() => setArtisteOpen(!artisteOpen)}>
					{artisteOpen ? "Fermer" : "Ouvrir"}
				</button>
				</animated.div> 
				</div>
		
      )
}

export default GridArtiste