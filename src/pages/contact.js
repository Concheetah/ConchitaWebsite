import { Link } from 'gatsby'
import * as React from 'react'
import Layout from '../components/layout'
import { MailAddress } from '../components/mailto'


const ContactPage = () => {
    return (
      <Layout pageTitle="About me">
          <p>You can contact me via:</p>
          <ul>
              <li><Link to="https://www.linkedin.com/in/cmartinhoogerwaard/">LinkedIn</Link></li>
              <li><Link to="https://www.instagram.com/conchitamartin9/?hl=nl">Instagram</Link></li>
              <li><Link to="https://www.instagram.com/3minutesims/?hl=nl">Instagram The Sims</Link></li>
              <li><MailAddress mail="conchitamartin94@gmail.com">Mail</MailAddress></li>
          </ul>
      </Layout>
    )
  }
  
  // Step 3: Export your component
  export default ContactPage