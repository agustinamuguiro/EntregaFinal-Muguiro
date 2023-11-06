import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ProductDetail from './components/ProductDetail';
import Checkout from './components/Checkout';
import OrderForm from './components/OrderForm';
import { CartContextProvider } from './CartContext';

const products = [
  {
    "imagen": "🌱",
    "codigo": 1,
    "nombre": "Maceta",
    "importe": 290,
    "categoria": "cocina",
    "descripcion": "Esta es una maceta hermosa para tus plantas de interior. Hecha de cerámica de alta calidad."
  },
  {
    "imagen": "👚",
    "codigo": 2,
    "nombre": "Perchero",
    "importe": 790,
    "categoria": "living",
    "descripcion": "Un perchero elegante y moderno para colgar tus abrigos y sombreros."
  },
  {
    "imagen": "🖼️",
    "codigo": 3,
    "nombre": "Cuadro",
    "importe": 590,
    "categoria": "escritorio",
    "descripcion": "Un cuadro decorativo para embellecer tu espacio de trabajo."
  },
  {
    "imagen": "👄",
    "codigo": 4,
    "nombre": "Servilletero",
    "importe": 490,
    "categoria": "cuarto",
    "descripcion": "Un servilletero de diseño para tu mesa de comedor."
  },
  {
    "imagen": "📦",
    "codigo": 5,
    "nombre": "Caja",
    "importe": 390,
    "categoria": "cocina",
    "descripcion": "Una caja práctica para almacenar tus utensilios de cocina."
  },
  {
    "imagen": "🥛",
    "codigo": 6,
    "nombre": "Posavasos",
    "importe": 190,
    "categoria": "living",
    "descripcion": "Posavasos modernos y elegantes para proteger tu mesa."
  },
  {
    "imagen": "📓",
    "codigo": 7,
    "nombre": "Libreta",
    "importe": 290,
    "categoria": "escritorio",
    "descripcion": "Una libreta de notas con hojas de alta calidad."
  },
  {
    "imagen": "✏️",
    "codigo": 8,
    "nombre": "Portalapices",
    "importe": 290,
    "categoria": "cuarto",
    "descripcion": "Un portalápices para organizar tus utensilios de escritura."
  },
  {
    "imagen": "🫖",
    "codigo": 9,
    "nombre": "Caja de té",
    "importe": 890,
    "categoria": "cocina",
    "descripcion": "Una caja de té con compartimentos para organizar tus variedades de té."
  },
  {
    "imagen": "🧺",
    "codigo": 10,
    "nombre": "Canasto",
    "importe": 390,
    "categoria": "living",
    "descripcion": "Un canasto decorativo para almacenar tus revistas y objetos."
  },
];

const App = () => {
  return (
    <Router>
      <div className="App">
        <CartContextProvider>
          <Navbar />
          <Switch>
            <Route exact path="/" component={ItemListContainer} />
            <Route path="/category/:categoryId" component={ItemListContainer} />
            <Route path="/item/:id" component={ProductDetail} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/order-form" component={OrderForm} />
            <Route component={() => <div>Página no encontrada</div>} />
          </Switch>
        </CartContextProvider>
      </div>
    </Router>
  );
};

export default App;




