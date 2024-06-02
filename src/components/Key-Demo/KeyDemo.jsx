import { useState } from "react"

const KeyDemo = () => 
{
    const [users] = useState([{"username":"Ashish1"},{"username":"Ashish2"},{"username":"Ashish123"},{"username":"Ashish2024"},{"username":"Ashish"}])
    const [userError, setUserError] = useState('');
    const [errorClass, setErrorClass] = useState("");
    const [passwordWarning, setPasswordWarning] = useState({'display':'none'});


    const VerifyUserName= (e) => 
    {
            for(var user of users)
            {
                if(user.username == e.target.value)
                {
                    setUserError('UserName Already Taken - try Another');
                    setErrorClass('text-danger');
                    break;
                }
                else
                {
                    setUserError('UserName Available');
                    setErrorClass('text-success')
                }
            }
    }
    const VerifyPassword = (e) =>
    {

        // ------------------------------------------------------------------------
                console.log(`
                key Code : ${e.KeyCode} \n
                char Code : ${e.charCode}\n
                White : ${e.which}
                `)
        // ------------------------------------------------------------------------


        if(e.which>=65 && e.which<=95)
        {
           setPasswordWarning({'display':'block'}); 
        }
        else
        {
            setPasswordWarning({'display':'none'})
        }
    }
    return(
        <>
        <div className="container-fluid m-5">
            <h2>Register User</h2>
            <dl>
                <dt>UserName</dt>
                <dd><input type="text" onKeyUp={VerifyUserName} name="" id="" /></dd>
                <dd className={errorClass}>{userError}</dd>
                <dt>Password</dt>
                <dd><input type="password" onKeyPress={VerifyPassword} /></dd>
                <dd className="text-warning" style={passwordWarning}>
                    <span className="bi bi-exclamation-triangle"></span>Warning Caps On !!!
                </dd>
            </dl>
        </div>
        </>
    )
}
export default KeyDemo