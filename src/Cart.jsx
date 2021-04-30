import React from 'react';

export default function Cart({ cart, removeFromCart }) {
  return (
    <>
     {
            cart.map((product) => (
                <div class="col-lg-4 col-md-6 mb-4">
                <div class="card h-100">
                    <a href="#!"><img class="card-img-top" src={product.image}  alt={product.name} /></a>
                    <div class="card-body">
                        <h4 class="card-title"><a href="#!">{product.name}</a></h4>
                        <h5>${product.price}</h5>
                        <p class="card-text">{product.description}</p>
                    </div>
                    <div class="card-footer"><small class="text-muted">★ ★ ★ ★ ☆</small>
                        <span>
                            <button className="btn btn-xs btn-outline-danger"  onClick={() => removeFromCart(product)}>Remove</button>
                        </span>
                    </div>
                </div>
            </div>  
            ))
        }
    </>
  );
}