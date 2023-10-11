import React from 'react';
import chat from './assets/chat.jpg';
import { useState } from 'react';
import {db} from './Firebase'
import { collection, addDoc } from "firebase/firestore";



const Reachout = () => {
  const [value, setValue] = useState('');

  const handleSubmit = async(e) =>{
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "messages"), {
        message: value,    
      });
      alert("Your Message has been sent! Thank You!");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  
  

  return (
    <div className='ogcontainer'>
        <div className='suncontainer'>
            <div className='reachoutcontainer'>
                <p className='headline'>Tell Us Your Thoughts !</p>
                <p className='rdescription'>
                  These styles can include changes in color, background, border, size, or any other visual effect you desire. Here's an example that changes the color and adds an underline to a link when hovered
                </p>
                {/* <input className='message' placeholder='type your message here'></input> */}
                <textarea 
                  className="message" 
                  placeholder="Type your message here..."
                  value={value}
                  onChange={(e)=> setValue(e.target.value)} ></textarea>
                <div className='submit'>
                  <button className='submitbutton' onClick={handleSubmit} >
                    <p className='submitname'>Submit</p>
                  </button>
                </div>
            </div>
        </div>   
        <img src={chat} className='chat' alt='chat'/>
    </div>
  )
}

export default Reachout