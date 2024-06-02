import { useState } from "react"

const Practice = () =>
{
    const[theme, setTheme] = useState('');
    const[buttonTheme,setButtonTheme] = useState("btn btn-dark w-100")

    const themeChange = (e) =>
    {
        if(e.target.checked)
        {
            setTheme("bg-dark text-white p-3")
            setButtonTheme("btn btn-light text-black w-100")
        }
        else
        {
            setTheme("bg-light text-black p-3");
            setButtonTheme("btn btn-dark text-white w-100")
        }
    }
    const handleThemeChange = (e) =>
    {
        if(e.target.value === "")
        {
            setTheme('bg-danger text-white p-3')
        }
        else
        {
            setTheme("bg-success text-white p-3")
        }
    }

    return(
        <div className="container-fluid mt-5">
        <div className="d-flex justify-content-center align-items-center" style={{width:"300"}}>
        <form className={theme}>
            <div className="form-switch ">
                <input type="checkbox" onChange={themeChange} name="" id="" className="form-check-input" /> Dark Mode
            </div>
                <h2><span className="bi bi-person-fill"></span>User Login</h2>
                <dl>
                    <dt>UserName</dt>
                    <dd><input type="text" onChange={handleThemeChange} className="form-control" name="" id="" /></dd>
                    <dt>Password</dt>
                    <dd><input type="text" className="form-control" /></dd>
                </dl>
                <button className={buttonTheme}>Login</button>
        </form>
            </div>
        </div>
    )
}
export default Practice