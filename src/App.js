import React, { useState } from 'react';
import './App.css';
import Products from './products';
import Cart from './Cart';
import Sidebar from './sidebar';
import Carousel from './carousel';
import Footer from './footer';

const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart';

function App() {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(PAGE_PRODUCTS);

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };
  const addToCart = (product) => {
    setCart([...cart, { ...product }]);
  }

  const removeFromCart = (RemoveProduct) => {
    setCart(cart.filter((product) => product !== RemoveProduct))
  }

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
          <a class="navbar-brand" href="#!">My Shopping Cart</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <button className=' btn btn-outline-primary' onClick={() => navigateTo(PAGE_PRODUCTS)}>View Products</button>
              </li>
              <button className=' btn btn-outline-primary' onClick={() => navigateTo(PAGE_CART)}>Cart ({cart.length})</button>
            </ul>
          </div>
        </div>
      </nav>
      <div className='container'>
        <div className='row'>
          <div class="col-lg-3">
            <Sidebar></Sidebar>
          </div>
          <div className='col-lg-9'>
          <Carousel></Carousel>
            <div className='row'>
              <>
                {page === PAGE_PRODUCTS && (
                  <Products addToCart={addToCart} />
                )}
                {page === PAGE_CART && (
                  <Cart cart={cart} removeFromCart={removeFromCart} />
                )}
              </>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;