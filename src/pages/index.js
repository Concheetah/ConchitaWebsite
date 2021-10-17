// Step 1: Import React
import * as React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>This is my website and I'm making this with gatsby.</p>
    </Layout>
  )
}

// Step 3: Export your component
export default IndexPage