import React from "react";
import {Slide} from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import "./styles.scss";
const images = [
  'https://live.staticflickr.com/65535/50438317077_aa79737401_k.jpg',
  'https://live.staticflickr.com/65535/50433098296_8777c94f3f_k.jpg',
  'https://live.staticflickr.com/65535/50432835536_3511418b5d_b.jpg'

];

function Home() {
  
  return (
    <div>
      <h1 className='title'> Travel the world</h1>
      <Slide pauseOnHover={false} duration='3000' transitionDuration='1000' arrows={false}>         
            <div style={{'backgroundImage': `url(${images[0]})`,'background-size':'cover', 'height':"80vh"}}/>
            <div style={{'backgroundImage': `url(${images[1]})`, 'background-size':'cover','height':"80vh"}}/>
            <div style={{'backgroundImage': `url(${images[2]})`, 'background-size':'cover','height':"80vh"}}/>
            
        </Slide>
    </div>
  );
}

export default Home;
