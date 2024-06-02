import { BrowserRouter, Route, Router, Link, Routes } from "react-router-dom";
import Shopping_Home from "./Shopping_Home";
import ShoppingProducts from "./Shopping_Products";
import ShoppingDetails from "./Shopping_Details";
const ShoppingIndex = () => {
  return (
    <div className="container-fluid">
      <BrowserRouter>
      <header className="d-flex justify-content-between bg-dark text-white p-2 m-2">
        <div>Shopper.</div>
        <div>
          <span className="me-2">Home</span>
          <span className="me-2">Electronics</span>
          <span className="me-2">Jewelery</span>
          <span className="me-2">Men's Clothing</span>
          <span className="me-2">Women Clothing</span>
        </div>
        <div>
          <span className="bi bi-person me-2"></span>
          <span className="bi bi-search me-2"></span>
          <span className="bi bi-heart me-2"></span>
        </div>
      </header>
      <section className="mt-3 overflow-auto" style={{height:'500px'}} >
        <Routes>
            <Route path="/" element={<Shopping_Home/>}/>
            <Route path="/home" element={<Shopping_Home/>}/>
            <Route path="/products/:catName" element={<ShoppingProducts/>} />
            <Route path="*" element={<div className="text-danger"><h2>Requested path not found</h2></div>}/>
            <Route path="/details/:prodId" element={<ShoppingDetails/>}/>

        </Routes>

      </section>
      </BrowserRouter>
    </div>
  );
};
export default ShoppingIndex;
