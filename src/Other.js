import React from 'react'
import About from './About'
import Reachout from './Reachout'
import Contact from './Contact'
import Events from './Events'
const Other = () => {
  return (
    <div className='othercontainer'>
        <div className='overlay2'/>
        {/* <div className='overlay3'/> */}
        <div className='finalcontainer'>
            <section id="events">
              <Events/>
            </section>

            <section id="about">
              <About/>
            </section>

            <section id="reachout">
              <Reachout/>
            </section>

            <section id="contact">
              <Contact/>
            </section>

        </div>

    </div>
  )
}

export default Other