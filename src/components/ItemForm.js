import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [name, setName] = useState(""); // State for item name
  const [category, setCategory] = useState("Produce"); // State for item category

  function handleSubmit(e) {
    e.preventDefault();
    const newItem = {
      id: uuid(), // Generate a unique ID
      name: name,
      category: category,
    };
    onItemFormSubmit(newItem); // Callback to add the new item
    setName(""); // Reset the form fields
    setCategory("Produce");
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input 
          type="text" 
          name="name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} // Controlled input for name
        />
      </label>

      <label>
        Category:
        <select 
          name="category" 
          value={category} 
          onChange={(e) => setCategory(e.target.value)} // Controlled input for category
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
