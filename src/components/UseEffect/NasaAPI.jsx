import { useEffect, useState } from "react"

const NasaAPI = () =>
{
    const[mars, setMars] = useState();
    useEffect(()=>
    {
        fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=DEMO_KEY&quot")
        .then(response => response.json())
        .then(data =>
            {
                setMars(data);
                console.log(data)

            })
    },[])
    return(
        <div className="container-fluid">
            <h2>Mars Photo</h2>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Photo id</th>
                        <th>Camera Name</th>
                        <th>Rover Name</th>
                        <th>Preview</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        mars.photos.map(photo=>
                            <tr key={photo.id}>
                                {/* <td>{photo.id}</td> */}
                                {/* <td>{photo.camera.full_name}</td>
                           
                                <td>
                                    <img src={photo.img_src} width="100" height="100"  />
                                </td> */}
                            </tr>
                            )
                    }
                </tbody>
            </table>
        </div>
    )
    
}
export default NasaAPI