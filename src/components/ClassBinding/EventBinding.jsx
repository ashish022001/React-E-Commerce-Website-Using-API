const EventBinding=() =>{
   function InsertClick(...args){
    var [msg, product] = args;
    document.write(`
    ${msg}<br>
    ${product.Name}
    `)
   }
    return(
        <div className="container-fluid">
            <h2>Events</h2>
            <button id="btnInsert" onClick={()=>{InsertClick('welcome',{'Name':'TV'})}} name="InsertButton">Insert</button>
        </div>
    )
} 
export default EventBinding