import { useState } from "react"

const ClassBinding =() =>
    {
        const [theme, setTheme] = useState("")
        const [buttonTheme, setButtonTheme] = useState("btn btn-dark w-100")
        const themeChange = (e) =>{
            if(e.target.checked)
                {
                    setTheme("bg-dark text-white p-3")
                    setButtonTheme("btn btn-light w-100")
                }
                else
                {
                    setTheme("bg-light text-dark p-3")
                    setButtonTheme("btn btn-dark w-100")

                }
        }
        const handleChange = (e) =>{
            if(e.target.value == "")
                {
                    setTheme("bg-danger text-white p-3")
                }
                else
                {
                    setTheme("bg-success text-white p-3")
                }
        }
        return(
            <form className="d-flex justify-content-center mt-5">
            <div className={theme}>
                <div className="card-header ">
                    <div className="form-switch">
                    <input type="checkbox" onChange={themeChange} className="form-check-input" id="" /> Dark Mode
                    </div>
                    <h2><span className="bi bi-person-fill"></span>User Login</h2>
                </div>
                <div className="card-body">

                    <dl>
                        <dt>UserName</dt>
                        <dd>
                            <input type="text" onChange={handleChange} className="form-control" />
                        </dd>
                        <dt>Password</dt>
                        <dd>
                            <input type="text" className="form-control" name="" id="" />
                        </dd>
                    </dl>
                    <button className={buttonTheme}>Login</button>

                </div>
            </div>
            </form>
        )
    }
    export default ClassBinding