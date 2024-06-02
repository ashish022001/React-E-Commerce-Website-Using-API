const Practice = () =>
{
    // function InsertClick(...args)
    // {
    //     // var[msg,product]=args;
    //     // document.write(`
    //     // ${msg}
    //     // ${product.name}
    //     // `)
    // }

    function InsertClick(msg,product)
    {
        document.write(`
        ${msg}
        ${product.name} <br>
        `)
    }
    return(
      <div className="container-fluid">
        {/* <h2>Events</h2>
        <button id="btnInsert" onClick={()=>{InsertClick('welcome',{'name':'TV'})}} name="InsertButton">Insert</button> */}

        <h2>Events</h2>
        <button id="btnInsert" onClick={()=>{InsertClick(...['WelCome',{'name':'samsung'}])}}>Insert</button>
      </div>
    )
}
export default Practice