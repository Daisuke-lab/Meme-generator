import React from 'react';

function Product(prop) {
  return (
    <div className="Product">
  <h1>{prop.id}</h1>
  
  <h2>{prop.name}</h2>

    </div>
  );
}

export default Product;