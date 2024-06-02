const DoubleClick = () =>
{   
    const DoubleClick = () =>
    {
        window.open( 'images/m1.png', 'width=500' ,'height=500' )
    }
    return(
        <div className="container mt-5">
        <h3>Double Click</h3>
        <img src="images/m1.png" onDoubleClick={DoubleClick} alt="" />
        </div>
    )
}
export default DoubleClick