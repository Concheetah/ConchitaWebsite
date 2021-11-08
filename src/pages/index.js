// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'


// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>This is my website and I'm making this with gatsby.</p>
      <StaticImage alt="This is me" src="Foto.JPG"/>
    </Layout>
  )
}

// Step 3: Export your component
export default IndexPage