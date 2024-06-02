import React from "react";

export class LoginTemplate extends React.Component
{
    constructor(props)
    {
        super();
    }
    render()
    {
        return(
            <div>
                <h2>{this.props.title}</h2>
                <dl>
                    <dt>{this.props.username}</dt>
                    <dd><input type={this.props.type} name="" id="" /></dd>
                    <dt>Password</dt>
                    <dd><input type="password" name="" id="" /></dd>
                </dl>
                <button>Login</button>
            </div>
        )
    }
}

export class ClassPropertiesDemo extends React.Component
{
    render()
    {
        return(
            <div className="container-fluid">
            <h2>Class Properties</h2>
            <LoginTemplate title="User Login" username="User Login" type="email"/>
            </div>
        )
    }
}