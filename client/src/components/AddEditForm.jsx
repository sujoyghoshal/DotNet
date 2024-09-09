import React, { useState } from 'react';

const AddEditForm = ({ addItem }) => {
  const [formData, setFormData] = useState({ id: '', name: '', description: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.description) return;

    const newItem = {
      id: Date.now(),
      ...formData,
    };

    addItem(newItem);
    setFormData({ id: '', name: '', description: '' });
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div> <br />
      <div className="form-group">
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          name="description"
          id="description"
          placeholder="Enter description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </div><br />
      <button type="submit" className="submit-btn" style={{ backgroundColor: 'red'}}>Add Item</button>
    </form>
  );
};

export default AddEditForm;
