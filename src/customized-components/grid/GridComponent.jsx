const GridComponent = (props) =>
{
    return(
        <div className="container-fluid">
            <table className="table table-hover table-dark caption-top">
                <caption>{props.caption}</caption>
                    <thead>
                        <tr>
                            {
                                props.fields.map((field)=>
                                <th key={field}>{field}</th>
                                )
                            }
                        </tr>
                    </thead>
                    <tbody
                        >
                        {
                            props.data.map(item=>
                                <tr key={item}>
                                    {
                                        Object.keys(item).map(key=>
                                            <td key={item[key]}>{item[key]}</td>
                                            )
                                    }
                                </tr>
                                )
                        }
                    </tbody>
            </table>
        </div>
    )
}
export default GridComponent