import React,{useState} from 'react'; 
import{getNewExpirationTime,generateId}from './Utilites';

export function AddThoughtForm(props){
   const [text ,setText]=useState('')
    const handleTextchange=(e)=>{
setText(e.target.value);
}
const handleSubmit=(e)=>{
    e.preventDefault();
if (text.length!==0){
const thought={
id:generateId(),
text:text,
expiresAt:getNewExpirationTime(),
};
props.addThought(thought);
setText('');
};
}
   return(
<from  
className="AddThoughtForm" >
    <input value={text} onChange={handleTextchange} 
    type="text"  />
   <button type="button" onClick={handleSubmit}>Add</button>
</from>
    );
}