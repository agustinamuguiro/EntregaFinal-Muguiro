import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Product from './Product';

function ItemListContainer({ products }) {
  const { categoryId } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const filtered = products.filter((product) => product.categoria === categoryId);
    setFilteredProducts(filtered);
  }, [categoryId, products]);

  return (
    <div className="item-list-container">
      <h2>Productos en la categoría: {categoryId}</h2>
      {filteredProducts.map((product) => (
        <Product key={product.codigo} product={product} />
      ))}
    </div>
  );
}

export default ItemListContainer;

