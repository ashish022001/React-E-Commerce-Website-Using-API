import React, { useEffect, useState } from 'react';
import './Shopping.css';

const ShoppingComponent = () => {

    const [Categories, setCategories] = useState([])
    const [Products, setProducts] = useState([])
    const [cardItems, setCardItems] = useState([]);
    const [CardCount, setCardCount] = useState(0);

    function GetCardCount() {
        setCardCount(cardItems.length);
    }

    function LoadCategories() {
        fetch("https://fakestoreapi.com/products/categories")
            .then((response) => response.json())
            .then((data) => {
                data.unshift("all");
                setCategories(data);
            })
    }

    useEffect(() => {
        LoadCategories();
        GetCardCount();
        LoadProducts("https://fakestoreapi.com/products")
    }, [])
    function LoadProducts(URL) {
        fetch(URL)
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
            })
    }
    function handleCategoriesChange(event) {
        if (event.target.value == "all") {
            LoadProducts("https://fakestoreapi.com/products")
        }
        else {
            LoadProducts(`https://fakestoreapi.com/products/category/${event.target.value}`);
        }
    }

    function handleAddToCartClick(e) {
        fetch(`https://fakestoreapi.com/products/${e.target.id}`)
            .then(response => response.json())
            .then(data => {
                cardItems.push(data);
                // console.log(cardItems);
                GetCardCount();
                alert(`${data.title}\nAdded To Card`)
            })
    }
    function handleHomeClick(e) {
        LoadProducts("https://fakestoreapi.com/products");
    }

    return (
        <div className='container-fluid'>
            <header className='d-flex justify-content-between p-2 text-white bg-dark'>
                <div><h2>Shopping App.</h2></div>
                <div>
                    <span className='me-4'> <button onClick={handleHomeClick} className='btn text-white'>Home</button></span>
                    <span className='me-2'> <button className='btn text-white'>Electronics      </button></span>
                    <span className='me-2'> <button className='btn text-white'> Jewelery        </button></span>
                    <span className='me-2'> <button className='btn text-white'> men's Fashion   </button></span>
                    <span className='me-2'> <button className='btn text-white'> Women's Fashion </button></span>
                </div>
                <div>
                    <span className='bi bi-search me-2'></span>
                    <span className='bi bi-heart me-2'></span>
                    <span className='bi bi-person me-2'></span>
                    <button data-bs-target="#cart" data-bs-toggle="modal" className='btn btn-light position-relative'>
                        <span className='bi bi-cart me-3'></span>
                        <span className='badge bg-danger  rounded-circle position-absolute'>{CardCount}</span>
                    </button>
                    <div className='modal fade' id='cart'>
                        <div className='modal-dialog'>
                            <div className='modal-content'>
                                <div className='modal-header'>
                                    <h2 className='text-primary'>Your cart Items</h2>
                                    <button data-bs-dismiss="modal" className='btn-close'></button>
                                </div>
                                <div className='modal-body'>
                                    <table className='table table-hover'>
                                        <thead>
                                            <tr>
                                                <th>Title</th>
                                                <th>Preview</th>
                                                <th>Price</th>
                                                <th>Remove</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                cardItems.map(cardItems =>
                                                    <tr>
                                                        <td>{cardItems.title}</td>
                                                        <td><img src={cardItems.image} width="50" height="50" /></td>
                                                        <td>{cardItems.price}</td>
                                                        <td><button className='btn btn-danger'><span className='bi bi-trash'></span></button></td>
                                                    </tr>
                                                )
                                            }
                                            
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <section className='mt-4 row'>
                <nav className='col-2'>
                    <div>
                        <label className='form-label'>Select Categories</label>
                        <div>
                            <select onChange={handleCategoriesChange} name="" id="" className='form-select'>
                                {
                                    Categories.map(Categories =>
                                        <option key={Categories} value={Categories}>
                                            {Categories.toUpperCase()}
                                        </option>
                                    )
                                }
                            </select>
                        </div>
                    </div>

                </nav>
                <main className='col-10 d-flex flex-wrap'>
                    {
                        Products.map(Products =>
                            <div key={Products.id} className='card m-2 p-2'>
                                <img src={Products.image} height="150" width="150" className='card-img-top' />
                                <div className='card-header'>
                                    <p className='card-title'>  {Products.title}</p>
                                </div>
                                <div className="card-body">
                                    <dl>
                                        <dt>Price</dt>
                                        <dd>{Products.price}</dd>
                                        <dt>Rating</dt>
                                        <dd> <span className='bi bi-star-fill text-success'></span> {Products.rating.rate}[{Products.rating.count}]</dd>
                                    </dl>
                                </div>
                                <div className='card-footer'>
                                    <button id={Products.id} onClick={handleAddToCartClick} className='btn btn-danger w-100'> <span className='bi bi-cart4'></span> Add to Card</button>
                                </div>
                            </div>
                        )
                    }
                </main>
            </section>
        </div>
    )
}

export default ShoppingComponent
