import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom"

const ShoppingProducts = () =>
{
    const params = useParams();
    const[product, setProduct] = useState([]);

    useEffect(()=>
    {
        axios({
            method:"get",
            url:`https://fakestoreapi.com/products/category/${params.catName}`

        })
        .then(response=>
            {
                setProduct(response.data)
            })
    },[])
    return(
        <div className="container-fluid">
            <h2>{params.catName} Products</h2>
            <div className="d-flex">
                {
                    product.map(product=>
                        <div key={product.id}>
                           <Link to={`/details/${product.id}`}> <img className="me-2 border border-1 border-primary"  src={product.image} width="100" height="100" /></Link>
                        </div>
                        )
                }
            </div>
            <Link to="/">Back to Categories</Link>
        </div>
    )
}
export default ShoppingProducts