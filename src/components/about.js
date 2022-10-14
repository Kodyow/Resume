import React from 'react'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
import Contact from './contact.js'
import pp from '../pp.jpg';


export const about = (props) => {
    const main = props.main;
    
    const bio = main.bio;

  return (
    <section id='about'>
        <div className='center'>
            <h1  style={{fontSize:'5em', marginBottom:'0'}}><i>Endless Growth</i></h1>
            <h2>Since 2001</h2>
            <h3>A Portfolio by Kody Williams</h3>
        </div>
        <div className='titleformat nosep'>
            <div className='column three block'>
                <div className='rightdist'>
                    <div className='profilePic'>
                        <img  src={pp} alt="Fail To Load"/>
                    </div>
                    <div>
                        <Contact main={main}/>
                    </div>
                </div>

            </div>
            <div className='column three'>
                <div children className='center'>
                    <h2>About Me</h2>
                    <p>
                        {bio}
                    </p>
                </div>

            </div>
            <div className='column three'>
                <div className='alignR'>
                    <h2>Resume</h2>
                    <a className='button' href='../resume.pdf' download>Download CV</a>
                    <div className='pdf'>
                    <Document file={'../resume.pdf'} >
                    <Page pageNumber={1} scale={0.7}/>
                    </Document>
                    </div>
                </div>

            </div>
        </div>

    </section>
  )
}

export default about;