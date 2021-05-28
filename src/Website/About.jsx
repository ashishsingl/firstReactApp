import React from 'react'
import Showcase from './Showcase'
import image from '../image/img2.png'

const About = () => {

    let cssStyle = {
      height : '600px',
      width : '400px'
    }
    return (
        <>
          <Showcase mainHeading="A Company of dedicated developers" highlighter=" Since 2021"  subHeading="As Web Development is not only our Job it's also our Hobby." buttonText="Contact Us" imgPath={image} imgstyle = {cssStyle} btnPath = "/contact"/>
        </>
    )
}

export default About
