import { useState, useCallback } from "react"
/**
 * Renders an array of strings passed in that can be filtered and added to as an
 * unordered list.
 * @returns Component
 */
export default function Sidebar({ initialMenuItems = [] }) {
  let [newMenuItem, setNewMenuItem] = useState("")
  // TODO 2: Using a state hook, maintain the current menu items as an array state.
  let [menuItems, setMenuItems] = useState(initialMenuItems)
  let [filter, setFilter] = useState("")

  // TODO 3: Adds a single string to the menuItems state array.
  let addMenuItem = useCallback(() => {
    if (newMenuItem.trim() !== "") {
      setMenuItems((prev) => [newMenuItem, ...prev])
      setNewMenuItem("")
    }
  }, [newMenuItem])

  // TODO 4: Display ONLY the menu items that contain the filter value (case-insensitive regex).
  let filteredItems = menuItems.filter((item) => {
    try {
      return new RegExp(filter, "i").test(item)
    } catch {
      return item.toLowerCase().includes(filter.toLowerCase())
    }
  })

  // TODO 1: Render an unordered list of the menu items.
  return (
    <div>
      <input
        type="text"
        id="newMenuItemValue"
        value={newMenuItem}
        onChange={(event) => setNewMenuItem(event.target.value)}
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
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
