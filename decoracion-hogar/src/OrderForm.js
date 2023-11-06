import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebase'; 

function OrderForm() {
  const [shippingInfo, setShippingInfo] = useState({
    name: '',
    address: '',
   
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
 
      const orderData = {
        name: shippingInfo.name,
        address: shippingInfo.address,
      
      };

 
      const docRef = await addDoc(collection(db, 'orders'), orderData);

  
      console.log('Orden creada con ID: ', docRef.id);


    } catch (error) {
      console.error('Error al crear la orden: ', error);
      
    }
  }

  return (
    <form onSubmit={handleSubmit}>
 
      <input
        type="text"
        name="name"
        value={shippingInfo.name}
        onChange={(e) => setShippingInfo({ ...shippingInfo, name: e.target.value })}
        placeholder="Nombre"
      />
      <input
        type="text"
        name="address"
        value={shippingInfo.address}
        onChange={(e) => setShippingInfo({ ...shippingInfo, address: e.target.value })}
        placeholder="Dirección"
      />
    
      <button type="submit">Finalizar Compra</button>
    </form>
  );
}

export default OrderForm;
