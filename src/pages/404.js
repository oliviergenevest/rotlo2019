import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

import Container from '../components/Container/Container'

const NotFoundPage = () => (
  <Layout>
   
    <Container text first>
	    <h1>Page introuvable</h1>
	    <p>La page demandée n'existe pas. </p>
	    <Link to='/'>Retour à l'accueil</Link>
    </Container>
  </Layout>
)

export default NotFoundPage
