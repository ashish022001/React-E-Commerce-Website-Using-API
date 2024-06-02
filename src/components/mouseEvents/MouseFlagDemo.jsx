import { useState } from "react"

const MouseFlagDemo = () =>
{
    const[styleObject,setStyleObject] = useState({'position':'','top':'','left':''});
    const handlemousemove =(e) =>
    {
        setStyleObject(
            {
                'position':'fixed',
                'left':e.clientX + "px",
                'top': e.clientY + "px"
        }
        )
    }
    return(
        <div className="container-fluid m-5" onMouseMove={handlemousemove}>
            <div style={{height:'1000px'}}>
                <p>Move Your mouse to test.</p>
                <br />
                x={styleObject.left}
                <br />
                y={styleObject.top}
                
            </div>
            <img src="images/flag.gif" style={styleObject} width="50" height="50" />
        </div>
    )
}
export default MouseFlagDemo