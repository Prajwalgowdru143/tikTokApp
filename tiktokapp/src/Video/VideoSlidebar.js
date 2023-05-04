import React, { useState } from 'react'
import "./VideoSidebar.css"
import FavoriteIcon from "@material-ui/icons/Favorite"
import MessageIcon from "@material-ui/icons/Message"
import ShareIcon from "@material-ui/icons/Share"
import FavoriteBorder from "@material-ui/icons/FavoriteBorder"


function VideoSlidebar({likes, shares, messages}) {
  const [liked, setLiked]=useState(false);
  return (
    <div className='videoSidebar'>
      
        <div className='videoSidebarButton'>
        {
        liked?(<FavoriteIcon fontSize='large'onClick={(e)=>setLiked(false)}/>):(
          <FavoriteBorder fontSize='large' onClick={(e)=>setLiked(true)}/>
        )
      }
            
            <p>{liked?likes+1:likes}</p>
        </div>
        <div className='videoSidebarButton'>
            <MessageIcon fontSize='large'/>
            <p>{shares}</p>
        </div>
        <div className='videoSidebarButton'>
         <ShareIcon fontSize='large'/>
<p>{messages}</p>
        </div>
      
    </div>
  )
}

export default VideoSlidebar
