import React from 'react';

const ItemTable = ({ items, deleteItem, updateItem }) => {
  const handleDelete = (id) => {
    deleteItem(id);
  };

  const handleUpdate = (id) => {
    const updatedName = prompt("Enter the updated name:");
    const updatedDescription = prompt("Enter the updated description:");

    if (updatedName && updatedDescription) {
      updateItem({ id, name: updatedName, description: updatedDescription });
    }
  };

  return (
    <div className="table-container">
      <table id='table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.length > 0 ? (
            items.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>
                  <button onClick={() => handleUpdate(item.id)}>Edit</button>
                  <button onClick={() => handleDelete(item.id)}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No items to display.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ItemTable;
