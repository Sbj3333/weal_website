import React from 'react'
import chat from './assets/chat.jpg'
import { collection, addDoc } from "firebase/firestore"; 
import { useState } from 'react';
import database from './Firebase';



const Reachout = () => {
  const [value, setValue] = useState('');

  const handleSubmit = async(e) =>{
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(database, "messages"), {
        message: value,    
      });
      alert("Your Message has been sent! Thank You!");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  
  

  return (
    <div className='ogcontainer'>
        {/* <div className='suncontainer'> */}
            <div className='reachoutcontainer'>
                <p className='headline'>Tell Us Your Thoughts !</p>
                <p className='rdescription'>
                Open the door to discussions. Share your insights and opinions with us.                </p>
                {/* <input className='message' placeholder='type your message here'></input> */}
                <textarea class="message" placeholder="Type your message here..." ></textarea>
                <div className='submit'>
                  <button className='submitbutton' onClick={handleSubmit} >
                    <p className='submitname'>Submit</p>
                  </button>
                </div>
            </div>
        {/* </div>    */}
        <img src={chat} className='chat'/>
    </div>
  )
}

export default Reachout