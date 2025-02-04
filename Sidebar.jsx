import { useState, useCallback } from "react";

/**
 * Renders an array of strings passed in that can be filtered and added to as an
 * unordered list.
 * @returns Component
 */
export default function Sidebar({ initialMenuItems }) {
  let [newMenuItem, setNewMenuItem] = useState("");
  
  // Task: 2 Using a state hook, maintain the current menu items as an array state.
  // Initialize menuItems with the initialMenuItems.
  let [menuItems, setMenuItems] = useState(initialMenuItems);
  
  // State for the filter input field
  let [filter, setFilter] = useState("");

  // Adds a new menu item to the current list of menu items
  let addMenuItem = useCallback(() => {
    console.log("Added menu item");
    if (newMenuItem.trim()) {
       // Task: 3. Add a new menu item to the correct variable associated with this class
      setMenuItems([newMenuItem, ...menuItems]);
      setNewMenuItem(""); // Clear the input after adding
    }
  }, [newMenuItem, menuItems]);

  // Task: 4. Display ONLY the menu items that contain the filter element value
  // Filter the menu items based on the value.
  const filteredMenuItems = menuItems.filter((item) =>
    item.toLowerCase().includes(filter.toLowerCase())
  );

  // Task: 1. Render an unordered list of the menu items
  return (
    <div>
      <input
        type="text"
        id="newMenuItemValue"
        value={newMenuItem}
        onChange={(event) => setNewMenuItem(event.target.value)}
        placeholder="New Menu Item"
      ></input>
      <br />
      <button onClick={addMenuItem}>
        Add Item
      </button>
      <br />
      <input
        id="filter"
        type="text"
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
        placeholder="Filter by..."
      ></input>

      <ul>
        {/* Render filtered menu items */}
        {filteredMenuItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
