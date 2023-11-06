import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Product from './Product';
import { getDatabase, ref, query, orderByChild, equalTo, get } from 'firebase/database';

function ItemListContainer() {
  const { categoryId } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const db = getDatabase();

  useEffect(() => {
 
    const productsRef = ref(db, 'products');
    
 
    const categoryQuery = query(productsRef, orderByChild('categoria'), equalTo(categoryId));

    get(categoryQuery)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const productsData = snapshot.val();
          const productsArray = Object.values(productsData);
          setFilteredProducts(productsArray);
        }
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, [categoryId, db]);

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

