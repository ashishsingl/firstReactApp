import React from 'react'
import Showcase from './Showcase'
import image from '../image/img1.png'

const Home = () => {

    let cssStyle = {
        height : '500',
        width : '500'
    }
    return (
        <>
         <Showcase mainHeading="Boost up your business with  " highlighter="Ashish Singla" subHeading="We are the team of dedicated developer making websites." buttonText="Get Started" imgPath={image} imgStyle={cssStyle} btnPath="/service"/>
        </>
    )
}

export default Home
