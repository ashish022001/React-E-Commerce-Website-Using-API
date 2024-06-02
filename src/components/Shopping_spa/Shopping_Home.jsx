import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Shopping_Home = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios(
      {
        method: "get",
        url: "https://fakestoreapi.com/products/categories",
      } )
      .then((response) => {
        
        setCategories(response.data);
      })
   
  }, []);
  return (
    <div className=" container-fluid ">
        <div >
            <h2>Categories</h2>
        <ol>
            {
                categories.map(category=>
                    <li key={category}>
                     <Link to={`/products/${category}`} > {category.toUpperCase()}</Link>
                    </li>
                    )
            }
        </ol>
      </div>
    </div>
  );
};
export default Shopping_Home;
