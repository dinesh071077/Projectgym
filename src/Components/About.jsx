import React from 'react'
import aboutimg from '../images/about.png'
function About() {
  return (
    <div id='about'>
        <div className="about-image">
             <img src={aboutimg} alt=''/>
        </div>
        <div className="about-text">
            <h1>LEARN MORE ABOUT US</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, totam. Doloribus, laudantium! Obcaecati qui veniam eveniet eaque deleniti, sint ratione placeat minima distinctio sit esse labore atque ipsam vitae eos.</p>
            <button>READ MORE</button>
        </div>
    </div>
  )
}

export default About