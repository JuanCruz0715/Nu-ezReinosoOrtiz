import React from 'react';
import './Home.css'; 

export default function Home() {
  return (
    <div className='conteiner'>
        <video className = 'video-class' muted autoPlay loop>
          <source src="/public/fondohome.mp4" type="video/mp4"></source>
        </video>
        <div className="video-overlay"></div> 
      </div>
  );
}
