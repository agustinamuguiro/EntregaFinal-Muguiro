import React from 'react';
import Product from './Product';

function ProductList({ products }) {
  return (
    <div className="product-list">
      {products.map((product) => (
        <Product key={product.codigo} product={product} />
      ))}
    </div>
  );
}

export default ProductList;