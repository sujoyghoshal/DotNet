import React, { useState, useEffect } from 'react';
import AddEditForm from './components/AddEditForm';
import ItemTable from './components/ItemTable';

const App = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem('items')) || [];
    setItems(savedItems);
  }, []);

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const updateItem = (updatedItem) => {
    const updatedItems = items.map((item) =>
      item.id === updatedItem.id ? updatedItem : item
    );
    setItems(updatedItems);
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="app-container">
      <h1>React with .NET CRUD</h1>
      <AddEditForm addItem={addItem} />
      <ItemTable items={items} deleteItem={deleteItem} updateItem={updateItem} />
    </div>
  );
};

export default App;
