// ShoppingList.js

import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchText, setSearchText] = useState("");
  const [itemList, setItemList] = useState(items); // State to manage the list of items

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(searchText) {
    setSearchText(searchText); // Update the state with new search text
  }

  function handleAddItem(newItem) {
    setItemList([...itemList, newItem]); // Add the new item to the state
  }

  const itemsToDisplay = itemList.filter((item) => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchText.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleAddItem} />
      {/* Pass search state and handler to Filter */}
      <Filter search={searchText} onSearchChange={handleSearchChange} onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
