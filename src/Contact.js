import React from 'react'
import contactimage from './assets/undraw_connecting_teams_re_hno7.svg'
import insta from './assets/insta1.png'

const Contact = () => {
  return (
    <div className='contactcontainer'>
        <div className='contacttext'>
            <p className='contactheading'>Contact Us</p>
            <button className='contactbutton'>
              <a href='https://www.instagram.com/weal_pesu/' className='instalink'>
                <img src={insta} className='insta' alt='whatever'/>
                <p className='name'>Weal_pesu</p>
              </a>
            </button>

        </div>
        <img src={contactimage} className='contact'/>

    </div>
  )
}

export default Contact