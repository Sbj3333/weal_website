import React from 'react'
import weallogo from './assets/weal_logo1.png'


const About = () => {
  return (
    <div className='aboutcontainer'>
            <img src={weallogo} className='weallogo 'alt='whatever'/>
            <div className='abouttext'>
                <p className='heading'>About The Club</p>
                <p className='aboutdescription'>WEAL is a vehicle that empowers students to play an active role in deciding and implementing issues related to their health. The Club also allows the students to become ‘Agents of Change’ who carry home and translate into action healthy habits and information they learn at WEAL and in this way influence their parents, friends, and society.</p>
            </div>
    </div>
  )
}

export default About