import React from 'react'
import './Page.css'
import logo from './assets/whitelogo.png'

const Home = () => {
    return (
        <div className='home'>
            <div className='overlay' />
            <div className='container'>
                <div className='navbar'>
                    <img src={logo} className='logo' />
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Events</li>
                        <li>Reach out</li>
                        <li>Contact us</li>
                    </ul>

                </div>
                <div className='text-container'>
                    <p className='mainline'>Welcome</p>
                    <p className='description'>These styles can include changes in color, background, border, size, or any other visual effect you desire. Here's an example that changes the color and adds an underline to a link when hovered</p>
                    <button className='firstbutton'>
                        <p className='firstbuttonname'>Reach out</p>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Home