// frontend/src/components/Menu.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    // Fetch menu items from the backend
    axios.get('/api/menu')
      .then(response => {
        setMenuItems(response.data);
      })
      .catch(error => {
        console.error('Error fetching menu:', error);
      });
  }, []);

  return (
    <div>
      <h2>Menu</h2>
      <ul>
        {menuItems.map(menuItem => (
          <li key={menuItem._id}>
            <h3>{menuItem.name}</h3>
            <p>{menuItem.description}</p>
            <p>${menuItem.price.toFixed(2)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;