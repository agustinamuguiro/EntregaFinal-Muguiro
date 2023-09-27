import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  { id: 'cocina', name: 'Cocina' },
  { id: 'living', name: 'Living' },
  { id: 'escritorio', name: 'Escritorio' },
  { id: 'cuarto', name: 'Cuarto' },
];

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Mi Tienda</div>
      {categories.map((category) => (
        <Link key={category.id} to={`/category/${category.id}`}>
          {category.name}
        </Link>
      ))}
    </nav>
  );
}

export default Navbar;
