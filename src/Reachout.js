import React from 'react'
import chat from './assets/chat.jpg'
import { collection, addDoc } from "firebase/firestore"; 
import { useState } from 'react';
import database from './Firebase';



const Reachout = () => {
  // const [value, setValue] = useState('');
  // const dbref = collection(database, "messages");

  // const handleChange = (e) =>{
    
  // }

  // const handlesubmit = async() =>{
  //   try{
  //     await addDoc(collection(database, 'messages'),{
  //     message: value,
  //   });
  //   }catch(error){
  //     console.error("error adding document", error);
  //   }
    
  // };

  return (
    <div className='ogcontainer'>
        <div className='suncontainer'>
            <div className='reachoutcontainer'>
                <p className='headline'>Tell Us Your Thoughts !</p>
                <p className='rdescription'>
                  These styles can include changes in color, background, border, size, or any other visual effect you desire. Here's an example that changes the color and adds an underline to a link when hovered
                </p>
                {/* <input className='message' placeholder='type your message here'></input> */}
                <textarea class="message" placeholder="Type your message here..." ></textarea>
                <div className='submit'>
                  <button className='firstbutton' >
                    <p className='firstbuttonname'>Submit</p>
                  </button>
                </div>
            </div>
        </div>   
        <img src={chat} className='chat'/>
    </div>
  )
}

export default Reachout