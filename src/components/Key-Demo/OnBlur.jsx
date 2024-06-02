import { useEffect, useState } from "react"


const OnBlur = () =>
{
    const[UserName, setUserName] = useState('')
    const[tip, setTip] = useState('');
    const ChangeCase = () =>
    {
        setUserName(UserName.toUpperCase())
        if(UserName === "")
        {
            setTip('UserName Required');
        }
        else
        {
            setTip('');
        }
    }
    const handleUserChange = (e) =>
    {
        setUserName(e.target.value)
    }

    // useEffect(()=>{
    //     console.log(UserName);
    // })

    const ShowTip = () =>
    {
        setTip('Name in Block Later Only')
    }
    return(
        <div className="container-fluid">
            <h2>User Register</h2>
            <dl>
                <dt>UserName</dt>
                <dd><input type="text" value={UserName} onFocus={ShowTip} onChange={handleUserChange} placeholder="Enter Name in Block Latter" onBlur={ChangeCase} /></dd>
                <dd>{tip}</dd>
            </dl>
        </div>
    )
}
export default OnBlur