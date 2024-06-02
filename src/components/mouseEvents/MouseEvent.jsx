import React, { useState } from 'react'
import '../mouseEvents/mouseDemo.css';
const MouseEvent = () => {
  const [photos] = useState(["images/m1.png","images/m2.png","images/m3.png","images/m4.png","images/m5.png"]);
  const [preview, setPreview] = useState("");

  const handleMouseOver=(e)=>
  {
    setPreview(e.target.src);
  }

  return (
    <div className='container-fluid row mt-2'>
      <nav className='col-2'>
        {
          photos.map(photo=>
            <div className='border border-2 border-primary m-1' style={{width:"75px"}} key={photo}>
              <img src={photo} onMouseOver={handleMouseOver} width="70" height="70" alt="" />
            </div>
            )
        }
      </nav>
      <main className='col-10'>
          <img src={preview} className='preview-image' width="400" height="400" alt="" />
      </main>
    </div>
  )
}

export default MouseEvent
