import "./App.css";
import React from "react";
import { useState } from "react";
import PackingList from "./PackingList";
import Logo from "./Logo";
import Form from "./Form";
import Stats from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDelete(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleDeleteAll() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items"
    );

    if (!confirmed) return;
    setItems([]);
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDelete}
        onToggleItems={handleToggleItem}
        handleDeleteAll={handleDeleteAll}
      />
      <Stats items={items} />
    </div>
  );
}
