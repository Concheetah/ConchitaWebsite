// Step 1: Import React
import * as React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>This is my website and I'm making this with gatsby.</p>
      <StaticImage alt="This is me" src="https://scontent-ams4-1.cdninstagram.com/v/t51.2885-19/s320x320/199281804_314012833722712_7836966211349502855_n.jpg?_nc_ht=scontent-ams4-1.cdninstagram.com&_nc_ohc=ZEIQ06TZNNsAX9QkFfh&edm=ABfd0MgBAAAA&ccb=7-4&oh=43c5231936447ffbc144013f5029829e&oe=61735060&_nc_sid=7bff83"/>
    </Layout>
  )
}

// Step 3: Export your component
export default IndexPage