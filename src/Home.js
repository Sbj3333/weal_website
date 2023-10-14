import React from 'react';
import logo from './assets/whitelogo.png';

const Home = () => {
    return (
        <div className='home'>
            <div className='overlay' />
                <div className='navbar'>
                    <ul>
                        <li><img src={logo} className='logo' alt='Logo' /></li>
                        <li><a href='#home'>Home</a></li>
                        <li><a href='#events'>Events</a></li>
                        <li><a href='#about'>About</a></li>
                        <li><a href='#reachout'>Reach out</a></li>
                        <li><a href='#contact'>Contact Us</a></li>
                    </ul>
                </div>
                <div className='text-container'>
                    <p className='mainline'>Welcome</p>
                    <p className='description'>The Official HealthTech club of PES University. Reach out to us and tell us your thoughts! It may be absolutely anything !</p>
                    <a href='#reachout' className='firstbutton'>
                        <p className='firstbuttonname'>Reach out</p>
                    </a>
                </div>
            
        </div>
    );
}

export default Home;
