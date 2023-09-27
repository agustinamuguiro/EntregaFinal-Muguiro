import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ProductDetail from './components/ProductDetail';

const products = [
  {
    "imagen": "🌱",
    "codigo": 1,
    "nombre": "Maceta",
    "importe": 290,
    "categoria": "cocina"
  },
  {
    "imagen": "👚",
    "codigo": 2,
    "nombre": "Perchero",
    "importe": 790,
    "categoria": "living"
  },
  {
    "imagen": "🖼️",
    "codigo": 3,
    "nombre": "Cuadro",
    "importe": 590,
    "categoria": "escritorio"
  },
  {
    "imagen": "👄",
    "codigo": 4,
    "nombre": "Servilletero",
    "importe": 490,
    "categoria": "cuarto"
  },
  {
    "imagen": "📦",
    "codigo": 5,
    "nombre": "Caja",
    "importe": 390,
    "categoria": "cocina"
  },
  {
    "imagen": "🥛",
    "codigo": 6,
    "nombre": "Posavasos",
    "importe": 190,
    "categoria": "living"
  },
  {
    "imagen": "📓",
    "codigo": 7,
    "nombre": "Libreta",
    "importe": 290,
    "categoria": "escritorio"
  },
  {
    "imagen": "✏️",
    "codigo": 8,
    "nombre": "Portalapices",
    "importe": 290,
    "categoria": "cuarto"
  },
  {
    "imagen": "🫖",
    "codigo": 9,
    "nombre": "Caja de té",
    "importe": 890,
    "categoria": "cocina"
  },
  {
    "imagen": "🧺",
    "codigo": 10,
    "nombre": "Canasto",
    "importe": 390,
    "categoria": "living"
  },

];

function App() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" render={(props) => <ItemListContainer {...props} products={products} />} />
            <Route path="/category/:categoryId" render={(props) => <ItemListContainer {...props} products={products} />} />
            <Route path="/item/:id" component={ProductDetail} />
            <Route component={() => <div>Página no encontrada</div>} />
          </Switch>
        </div>
      </Router>
    );
  }
  
  export default App;

