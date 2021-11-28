// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'



// Step 2: Define your component
const IndexPage = () => {
  return (

    <Layout pageTitle="Home Page">
      <p>Hello! This is my portofolio website. I am an enthusiastic, empathetic, dynamic communication designer with a technical background.
        You can navigate to the different tabs to find various items of information about me. Enjoy!
      </p>
      <StaticImage alt="This is me" src="Foto.JPG"/>
    </Layout>

  )
}

// Step 3: Export your component
export default IndexPage