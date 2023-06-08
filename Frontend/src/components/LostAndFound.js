import React, { useState } from "react";

const LostAndFound = () => {
  const [items, setItems] = useState([
    { id: 1, name: "book", description: "blue calculus book" },
    { id: 2, name: "pen", description: "black pen" },
    { id: 3, name: "pencil", description: "yellow pencil" },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [item, setItem] = useState(null);

  const handleUpdateItem = (id) => {
    setShowForm(true);
    setItem(items.find((item) => item.id === id));
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newItem = {
      id: item.id,
      name: event.target.name.value,
      description: event.target.description.value,
    };

    const updatedItems = items.map((item) => {
      if (item.id === newItem.id) {
        return newItem;
      }
      return item;
    });

    setItems(updatedItems);

    setShowForm(false);
  };

  return (
    <div>
      <h1 className="text-2xl mb-4">Lost and Found</h1>
      <ul className="list-none p-0">
        {items.map((item) => (
          <li key={item.id} className="mb-4">
            <h2 className="text-lg mb-2">{item.name}</h2>
            <p className="mb-2">{item.description}</p>
            <button
              className="mr-2 px-4 py-2 bg-green-500 text-white border-none rounded-md"
              onClick={() => handleUpdateItem(item.id)}
            >
              Update
            </button>
            <button
              className="px-4 py-2 bg-red-500 text-white border-none rounded-md"
              onClick={() => handleDeleteItem(item.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      {showForm && (
        <form onSubmit={handleSubmit} className="mb-4">
          <input
            name="name"
            type="text"
            placeholder="Name"
            className="mr-2 p-2 rounded-md"
          />
          <input
            name="description"
            type="text"
            placeholder="Description"
            className="mr-2 p-2 rounded-md"
          />
          <button
            type="submit"
            className="bg-green-500 text-white border-none rounded-md px-4 py-2"
          >
            Update
          </button>
          <button
            onClick={handleCloseForm}
            className="bg-red-500 text-white border-none rounded-md px-4 py-2"
          >
            Cancel
          </button>
        </form>
      )}
    </div>
  );
};

export default LostAndFound;
