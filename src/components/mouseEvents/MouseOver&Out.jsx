import '../mouseEvents/MouseOverOut.css';
const { useState } = require("react")
const MouseOverOut =()=>
{
    const [photos] = useState(["images/m1.png","images/m2.png","images/m3.png","images/m4.png","images/m5.png"]);
    const handleMouseOver =(e)=>
    {
        e.currentTarget.stop();
    }
    const handleMouseOut =(e)=>
    {
        e.currentTarget.start();
    }

    return(
        <>
        <div className="container-fluid m-5">
           <marquee onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} crollamout="10 p-5">
            {
                photos.map(photo=>
                    <img  className='m-2' src={photo} width="150" height="150" alt="" />
                    )
            }
           </marquee>
        </div>
        </>
    )
}
export default MouseOverOut