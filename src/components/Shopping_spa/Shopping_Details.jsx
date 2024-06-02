import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom"

const ShoppingDetails = () =>
{
    const params = useParams();
    const[product, setProduct] = useState({id:0,title:"",price:0,category:"",rating:{rate:0,count:0}});

    useEffect(()=>
    {
        axios({
            method:"get",
            url:`https://fakestoreapi.com/products/${params.prodId}`
        })
        .then(response =>
            {
                 setProduct(response.data)
            })
    },[])
    return(
        <div className="container-fluid">
            <h2>Products Details</h2>
            <dl>
                <dt>Title</dt>
                <dd>{product.title}</dd>
                <dt>Preview</dt>
                <dd><img src={product.image} width="120" height="120" alt="" /></dd>
                <dt>Price</dt>
                <dd>{product.price}</dd>
                <dt>Rating</dt>
                <dd><span className="bi bi-star-fill text-success"> </span>{product.rating.rate}[{product.rating.count}]</dd>

            </dl>
            <Link to={`/products/${product.category}`}>Back to {product.category}</Link>
        </div>
    )
}
export default ShoppingDetails