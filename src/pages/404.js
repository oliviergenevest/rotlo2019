import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Container from '../components/Container/Container'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Page introuvable" />
    <Container text first>
	    <h1>Page introuvable</h1>
	    <p>L'adresse demandée n'existe pas. </p>
	    <Link to='/'>Retour à l'accueil</Link>
    </Container>
  </Layout>
)

export default NotFoundPage
