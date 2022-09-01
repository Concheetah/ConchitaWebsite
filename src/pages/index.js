// Step 1: Import React
import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import {BlockPurple, BlockPeach, BlockBlue, BlockRed} from '../components/blocks.jsx'
import Contact from '../components/Contact.jsx'
import '../styles/styles.css'



const IndexPage = () => {

  return (
    <>
    <div className='square'></div>
    <div className="arrow-up"></div>
    <div className='circle'></div>

    <BlockBlue >
        <h1>Conchita's portofolio</h1>
        Hello! This is my portofolio website. I am an enthusiastic, empathetic, dynamic communication designer with a technical background.
        You can scroll down to find various items of information about me. Enjoy!
    </BlockBlue>
    <BlockPeach>
      <h2>Training sessions</h2>
      For three years I've designed and delivered participative sessions with technical students.
      <div style={{padding:'1rem', paddingLeft:'5rem'}}>
        <StaticImage src="../images/presentation.png" width={'9rem'} alt='training'/>
      </div>
    </BlockPeach>
    <BlockPurple>
      <h2>Serious games and gamification</h2>
      I became more interested in the interactive element of training sessions and wanted to explore this more. I came into contact with
      serious games. I have published in a conference, had two courses about it and provided two lectures on gamification.       
      <a href="https://graphics.tudelft.nl/Publications-new/2022/CMLPSWBHB22/RestoQuest.paper.final.pdf"> Paperlink</a>
      <div style={{padding:'1rem', paddingLeft:'5rem'}}>
        <StaticImage src="../images/board-game.png" width={'9.5rem'} alt={'boardgame'}/>
      </div>
    </BlockPurple>
    <BlockRed>
      <h2>Webdevelopment</h2>
      I started making apps and websites in different language. I started off with Android studio, but later switched to react and react native.
      <div style={{padding:'1rem', paddingLeft:'5rem'}}>
        <StaticImage src="../images/world-wide-web.png" width={'9rem'} alt={'web'}></StaticImage>
      </div>
    </BlockRed>
    <Contact>
      <a href="https://www.linkedin.com/in/cmartinhoogerwaard/"><img src="linkedin.png" style={{width:'2rem'}}  alt='linkedIn'/></a>
    </Contact>
    </>

  )
}

export default IndexPage