/* eslint-disable array-callback-return */
import './postCard.css';
import Heart from '../../img/heart.png';
import HeartFilled from '../../img/HeartFilled.png';
import Comment from '../../img/comment.jpg';
import Share from '../../img/share.png';
import Info from '../../img/info.jpg';
import Send from '../../img/send.png'
import { useState } from 'react';




const Card = (props) => {

const [liked,setLiked]=useState(false);
const [write,setWrite]=useState("");
const [text,setText]=useState([]);

const handleComment = () =>{
setText((prev)=>[...prev,write])
handleNotification(2)
}

const handleNotification =(type) => {
 
  // eslint-disable-next-line no-lone-blocks
  {liked?
    (setLiked(false))
    :(setLiked(true))
    props.socket.emit("sendNotification",{
      senderName:props.user,
      receiverName:props.username,
      type,
    });
    
  }

}

  return (
    <div className='card'>
        <div className="info">
            <img src={props.userImg} alt="" className="userImg" />
            <span>{props.fullname}</span>
        </div>
             <img src={props.postImg} alt="" className="postImg" />
        <div className="interaction">
          {liked?
          (<img src={HeartFilled} alt="" className="cardIcon heart" onClick={()=>handleNotification(1)} />)
          :(<img src={Heart} alt="" className="cardIcon heart" onClick={()=>handleNotification(1)} />)}
             
             <img src={Comment} alt="" className="cardIcon commenticon" onClick={()=>handleNotification(2)} />
             <img src={Share} alt="" className="cardIcon" onClick={()=>handleNotification(3)} />
             <img src={Info} alt="" className="cardIcon infoIcon" />
        </div>
        <div className='oldComments'>
        {text.length>0 && text.map((c)=>
         <>
         <img src={props.userImg} alt="skan" className="userImg" />
         <span className='oldComment'>{c}</span>
         </>
        )}
        </div>
        
        <div className="comments">
        <input type="text" className="comment" placeholder='Comment' onChange={(e)=>{setWrite(e.target.value)}}/>
        <img src={Send} alt="" className="okIcon" onClick={handleComment} />
        
        </div>

    </div>
  )
}

export default Card