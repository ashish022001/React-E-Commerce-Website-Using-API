import { useState } from "react";
const ClipBoardEvetes=() =>
{
    const[msg, setMsg] = useState('');
        const textCopy = () =>
        {
            setMsg("Copy Text")
        }
        const pasteText = () =>
        {
            setMsg('Paste Text')
        }
        const CutText = () =>
        {
            setMsg('Cut Text')
        }
        
          return(
        <div className="container-fluid m-5">
            <textarea name="" onCopy={textCopy}  onPaste={pasteText} onCut={CutText} id="" cols="50" rows="5"></textarea>
            <dd>{msg}</dd>
         </div>
    )
}
export default ClipBoardEvetes