import React from "react";

export class PureDemo extends React.PureComponent
{
    constructor()
    {
        super();
        this.state = {
            products:["TV","Mobile","Watch"]
        }
    }
    handleLoadClick()
    {
        this.setState({
            products:["TV","Mobile","Watch","Shoes"]
        })
    }
    componentDidUpdate()
    {
        console.log("Component will Render on Update")
    }
    render()
    {
        return(
            <div>
                <h2>Pure Component <button onClick={this.handleLoadClick.bind(this)}>Load</button> </h2>
                <ol>
                    {
                        this.state.products.map((product)=>
                        <li key={product}>{product}</li>
                        )
                    }
                </ol>
            </div>
        )
    }
}