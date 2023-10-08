import React from 'react'
import contactimage from './assets/undraw_connecting_teams_re_hno7.svg'
import insta from './assets/insta1.png'

const Contact = () => {
  return (
    <div className='contactcontainer'>
        <div className='contacttext'>
            <p className='contactheading'>Contact Us</p>
            <button className='contactbutton'>
                <img src={insta} className='insta' alt='whatever'/>
                <p className='name'>Weal_pesu</p>
            </button>

        </div>
        <img src={contactimage} className='contact'/>

    </div>
  )
}

export default Contact