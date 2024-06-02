import React, { useEffect, useState } from 'react'
import '../ShoppingPractice/Fakestore.css';
const FakestoreShopping = () => {

    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const[CardCount, setCardCount] = useState(0)
    const[cartItem, setCartItems] = useState([])

    function LoadCategories() {
        fetch("https://fakestoreapi.com/products/categories")
            .then((response) => response.json())
            .then((data) => {
                setCategories(data);
                data.unshift("all")
                // console.log(data)
            })
    }
    function LoadProducts(URL) {
        fetch(URL)
            .then((response) => response.json())
            .then((data) => {

                setProducts(data);
                // console.log(data)
            })
    }
    useEffect(() => {
        LoadProducts();
        GetCardCount();
        LoadCategories();
    }, [])
    function handleCategoriesChange(event) {
        if (event.target.value === "all") {
            LoadProducts("https://fakestoreapi.com/products")
        }
        else {
            LoadProducts(`https://fakestoreapi.com/products/category/${event.target.value}`);
        }
    }
    function GetCardCount()
    {
        setCardCount(cartItem.length)
    }
    function handleAddToCartChange(event)
    {
        fetch(`https://fakestoreapi.com/products/${event.target.id}`)
        .then(response=>response.json())
        .then(data=>{
            cartItem.push(data);
            // console.log(cardItems);
            GetCardCount();
            alert(`${data.title}\nAdded To Card`)
        })
    }
    return (
        <div className=' container-fluid'>
            <header className=' d-flex justify-content-between m-2 p-2 bg-dark text-white '>
                <div>
                    <h1>Shopping.</h1>
                </div>
                <div>
                    <nav>
                        <span className='me-4'>Home</span>
                        <span className='me-4'>Electronics</span>
                        <span className='me-4'>Jelewery</span>
                        <span className='me-4'>Men's Fashion</span>
                        <span className='me-4'>Women's Fashion</span>
                    </nav>
                </div>
                <div>
                    <div>
                        <span className='bi bi-person-fill me-3'></span>
                        <span className='bi bi-heart me-3'></span>
                        <span className='bi bi-search me-3'></span>
                        <button data-bs-target="#modal" data-bs-toggle="modal" className='btn bg-light position-relative'>
                            <span className='bi bi-cart me-3'></span>
                            <span className='badge rounded-circle bg-danger position-absolute'>{CardCount}</span>
                        </button>
                        <div className='modal fade' id='modal'>
                                    <div className='modal-dialog'>
                                        <div className='modal-content'>
                                            <div className='modal-header'>
                                                <h2 className='text-primary'>Product Details</h2>
                                                <button data-bs-dismiss="modal" className='btn-close'></button>
                                            </div>
                                            <div className='modal-body'>
                                    
                                            </div>
                                            <div className='modal-footer'>

                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                    </div>
                </div>
            </header>
            <section className='row'>
                <nav className='col-2'>
                    <label>Select Product</label>
                    <select onChange={handleCategoriesChange} className='form-select' name="" id="">
                        {
                            categories.map(categories =>
                                <option key={categories} value={categories}>
                                    {categories.toUpperCase()}
                                </option>
                            )
                        }
                    </select>
                </nav>
                <main className='col-10 d-flex flex-wrap'>
                    {
                        products.map(products =>
                            <div id={products.id} key={products.id} className='card m-2 p-2'>
                                <img src={products.image} height="150" alt="" />
                                <div className='card-header'>
                                    <p>{products.title}</p>
                                </div>
                                <div className="card-body">
                                    <dl>
                                        <dt>Price</dt>
                                        <dd>{products.price}</dd>
                                        <dt>Rate</dt>
                                        <dd> <span className='bi bi-star-fill text-success'></span> {products.rating.rate}[{products.rating.count}]</dd>
                                    </dl>
                                </div>
                                <div className='card-footer'>
                                    <button onClick={handleAddToCartChange} className='btn btn-danger w-100'><span className='bi bi-cart'></span> Add To Cart</button>
                                </div>
                                
                            </div>
                        )
                    }
                </main>
            </section>
        </div>
    )
}

export default FakestoreShopping
