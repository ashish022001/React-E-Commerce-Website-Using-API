import { useState } from "react"

const LikesCounter = () =>
    {
        const[counter,setCounter] = useState(1);
        return(
            <div className="container-fluid">
                <h2>Like Counter</h2>
                <a href="home.html">Home</a>
                <div className="mt-2">
                    <span data-testid='counter'>{counter}</span>
                </div>
            </div>
        )
    }
    export default LikesCounter