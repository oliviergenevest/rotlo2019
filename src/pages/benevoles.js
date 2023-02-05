import React from 'react'
/*import { Link } from 'gatsby'*/
import {GatsbyImage} from 'gatsby-plugin-image'
import Layout from '../components/layout'
import Container from '../components/Container/Container'
import {Seo} from '../components/seo'
import { graphql } from 'gatsby'

const Benevoles = ({data}) => {
 
 // console.log(data)

  return  ( 
    <Layout> 
    
      <Container text first >
          <h1>Bénévoles</h1>
          
          <div dangerouslySetInnerHTML={{ __html:data.datoCmsPageBenevole.content}} />
         
      </Container> 
    </Layout>
  )
}

export default Benevoles



// TODO : utiliser les props de la page en parametre du composant Seo pour recuperer les infos de datocms
export const Head = () => (
	<Seo title="Bénévoles Rock on the l'Oule" 
  />
  )
  

export const query = graphql`
  query {

    datoCmsPageBenevole {
      content
    }
  
  }
`
