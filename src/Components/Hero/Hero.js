import React from 'react'
import './Hero.css';
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'
function Hero() {
  return (
    <div className='hero'>
        <div className='hero_left'>
<h2>New Arrivals Only!</h2>
<div className='hero_hand_icon'>
<p>new</p>
<img src={hand_icon}/>
        </div>
        <p>collections</p>
        <p>for everyone</p>
        </div>
        <div className='hero_latest_btn'>
            <div>Latest Coolection</div>
            <img src={arrow_icon}/>
        </div>
        <div className='hero_right'>
<img src={hero_image}/>
        </div>
    </div>
  )
}

export default Hero