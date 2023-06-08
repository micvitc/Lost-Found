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
      <h1 style={{ fontSize: "24px", marginBottom: "16px" }}>Lost and Found</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {items.map((item) => (
          <li key={item.id} style={{ marginBottom: "16px" }}>
            <h2 style={{ fontSize: "20px", marginBottom: "8px" }}>{item.name}</h2>
            <p style={{ marginBottom: "8px" }}>{item.description}</p>
            <button
              style={{
                marginRight: "8px",
                padding: "8px 16px",
                backgroundColor: "#4CAF50",
                color: "white",
                border: "none",
                borderRadius: "4px",
              }}
              onClick={() => handleUpdateItem(item.id)}
            >
              Update
            </button>
            <button
              style={{
                padding: "8px 16px",
                backgroundColor: "#f44336",
                color: "white",
                border: "none",
                borderRadius: "4px",
              }}
              onClick={() => handleDeleteItem(item.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      {showForm && (
        <form onSubmit={handleSubmit} style={{ marginBottom: "16px" }}>
          <input
            name="name"
            type="text"
            placeholder="Name"
            style={{ marginRight: "8px", padding: "4px 8px", borderRadius: "4px" }}
          />
          <input
            name="description"
            type="text"
            placeholder="Description"
            style={{ marginRight: "8px", padding: "4px 8px", borderRadius: "4px" }}
          />
          <button
            type="submit"
            style={{
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "4px",
              padding: "8px 16px",
            }}
          >
            Update
          </button>
          <button
            onClick={handleCloseForm}
            style={{
              backgroundColor: "#f44336",
              color: "white",
              border: "none",
              borderRadius: "4px",
              padding: "8px 16px",
            }}
          >
            Cancel
          </button>
        </form>
      )}
    </div>
  );
};

export default LostAndFound;
