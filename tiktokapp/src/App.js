import React from 'react';
import './App.css';
import Video from './Video/Video';
function App() {
  return (
    <div className="App">
     <h1>lets build full stack mern stack App</h1>
     <div className='appVideos'>
     <Video url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
     channel="GameOfThrones" description="Mother Of Dragons" song="Dracarous!! Fire It Up" likes={250} shares={45} messages={13}/>
     <Video url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
     channel="GameOfThrones" description="Mother Of Dragons" song="Dracarous!! Fire It Up" likes={250} shares={45} messages={13}/>
     </div>
     {/**App container */}
    </div>
  );
}

export default App;
