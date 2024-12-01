import React,{useEffect} from 'react';

export default function Thought(props){
    const {thought,removeThought}=props;

const handleRemoveClick=()=>{
    removeThought(thought.id);
};
useEffect(()=>{
   const timeRemaining = thought.expiresAt - Date.now();
    const timeout = setTimeout(()=>{
    
   removeThought(thought.id);
    },
   timeRemaining 
 );
  return () => {
    clearTimeout(timeout)
 }
  },[thought]); 
  return( 
  <div>
  <p>{thought.text}</p>
<button  onClick={handleRemoveClick}>Rem</button>
  </div>)
}