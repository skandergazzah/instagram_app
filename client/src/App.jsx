import './App.css';
import { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Posts from '../src/components/card/Posts';
import { useEffect } from 'react';
const {io} =require("socket.io-client");

const App= () =>{
  const [username,setUserName] = useState("");
  const [user,setUser] = useState("");
  const [socket,setSocket]= useState(null);
// console.log(user);
useEffect(()=>{
  //socket :On utilise ce Hook pour indiquer à React que notre composant doit exécuter quelque chose après chaque affichage
  //ma3netha "IOOOOOOOOOO (clienttt) " tabath "sockerrrrrrrrr ballll" lel Porrrrrrrtttt 500000000000//[] ma3nethaaa marra bark fi kol 7ala
setSocket(io("http://localhost:5000")); 
// console.log(socket.on("First event",(msg)=>{console.log(msg)}))
},[] );   

useEffect(()=> {
  socket?.emit("newUser",user);
},[user,socket]) //usestate ==yetbadlou 

  return(
<div className="container">
{/* xbjs  locla storage thot<name w image ili hachtk bech todhher */}

  {user?(
  <>
  <Navbar socket={socket}/>
  <Posts socket={socket} user={user}/>
  
  <span className="username">{user}</span>
  </>)
  :(
  <div className='login'>
  <input type="text"  placeholder="UserName" onChange={(e)=>setUserName(e.target.value)}/>
  <button onClick={()=> setUser(username)}>Login</button>
  </div>)
  
}
</div>
  
  )
};
export default App;