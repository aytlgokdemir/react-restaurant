import React from 'react'
import BannerImage from '../assets/banner.jpg'

function About() {
  return (
    <div className='about'>
        <div className='aboutTop' style={{backgroundImage:`url(${BannerImage}`}}></div>
        <div className='aboutBottom'>
            <h1>About Us</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac tempor libero, ac vestibulum tortor. Ut lacus felis, placerat at odio non, aliquam sodales turpis. Aliquam erat volutpat. Donec eu urna vitae nisi sollicitudin euismod id ut nibh. Morbi ac condimentum mauris, et porttitor diam. Morbi in interdum tortor, sit amet tempor magna.</p>
        </div>
    </div>
  )
}

export default About