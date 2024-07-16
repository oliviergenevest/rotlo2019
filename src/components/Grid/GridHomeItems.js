import React from 'react'
import { Link } from 'gatsby'
import {GatsbyImage} from 'gatsby-plugin-image'
import * as styles from './GridHomeItems.module.scss'


const GridHomeItems = ({items}) => {

 //  console.log(items)
   
      return (
      
      	<div className= {styles.gridHomeSection} >
            {items.map((item, key) => (
            <Link key={key} to={`/${item.slug}`} className={styles.item}>
                <GatsbyImage image={item.cover.gatsbyImageData} alt={item.name}/>
                <span>{item.name}</span>
            </Link>
            ))}
      	</div>
     
      )
}

export default GridHomeItems

