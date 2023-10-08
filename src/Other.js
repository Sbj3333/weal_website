import React from 'react'
import About from './About'
import Reachout from './Reachout'
import Contact from './Contact'
import Events from './Events'
const Other = () => {
  return (
    <div className='othercontainer'>
        <div className='overlay2'/>
        <div className='finalcontainer'>
            {/* <Events/> */}
            <About/>
            <Reachout/>
            <Contact/>

        </div>

    </div>
  )
}

export default Other