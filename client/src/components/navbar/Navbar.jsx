//rafce [ok]
import './navbar.css'
import Notification from '../../img/not.png';
import Message from'../../img/message.png';
import Settings from '../../img/setting.png';
import { useEffect } from 'react';
import { useState } from 'react';

const Navbar = ({socket}) => {
const [notifications,setNotifications]= useState([]);
const [open,setOpen]=useState(false);

  useEffect(()=>{
      socket.on("getNotification",(data) =>{
            setNotifications((prev)=>[...prev, data]);
      });
  },[socket])

  console.log(notifications);

const displayNotification =({senderName,type}) => {
  let action ;

  if(type===1){
    action="liked"
  }else if(type===2){
    action="commented"
  }else{
    action="shared"
  }
  return(
    <span className="notification">{`${senderName} ${action} your post`}</span>
  )
};

const handleRead = () =>{
  setNotifications([]);
  setOpen(false)
}
  return (
    <div className='navbar'>
      <span className="logo">This's for U</span>
      <div className="icons">
          <div className="icon" onClick={()=>setOpen(!open)}>
              <img src={Notification} alt="" className="iconImg" />
              {notifications.length>0 &&<div className="counter">{notifications.length}</div>}
              
          </div>

          <div className="icon" onClick={()=>setOpen(!open)}>
              <img src={Message} alt="" className="iconImg" />
              {/* <div className="counter">2</div> */}
          </div>

          <div className="icon" onClick={()=>setOpen(!open)}>
              <img src={Settings} alt="" className="iconImg" />
              {/* <div className="counter">2</div> */}
          </div>
      </div>
      {open && (
      <div className="notifications">
      {notifications.map((n)=>
      <div className="notification">{displayNotification(n)}</div>
      )}
      <button className="nButton" onClick={handleRead}>Mark as read</button>
  </div>
      )}
      
    </div>
  )
}

export default Navbar