import React,{useState} from 'react'; 
 import { AddThoughtForm } from './AddThoughtForm';
 import{getNewExpirationTime,generateId}from './Utilites';
 import Thought from  './Thought';;
export default function App() {
  const [thoughts, setThoughts] = useState([
    {
      id: generateId(),
      text: 'This is a place for your passing thoughts.',
      expiresAt: getNewExpirationTime(),
    },
    {
      id: generateId(),
      text: "They'll be removed after 15 seconds.",
      expiresAt: getNewExpirationTime(),
    },
  ]);
  const addThought=(thought)=>{
    setThoughts(prevThoughts=>[thought, ...prevThoughts])
  }
  const removeThought = (thoughtRemove) => {
    setThoughts((thoughts) => thoughts.filter((thought) => thought.id !== thoughtRemove));
  };
  return (
    <div className="APP">
      <header>
    <h1>Passing Thoughts</h1>  
</header>
<main>
  <AddThoughtForm addThought={addThought }/>
  <ul>
  {thoughts.map((thought) => (
    <Thought key={thought.id} removeThought={removeThought} thought={thought} ></Thought>
  ))}
</ul>

</main>
    </div>
  );
}

