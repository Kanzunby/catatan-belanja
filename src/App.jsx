import { useState } from "react";
import "./App.css";
import AddForm from "./component/AddForm";
import Footer from "./component/Footer";
import GroceryList from "./component/GroceryList";
import Header from "./component/Header";

const groceryItems = [];

function App() {
  const [items, setItems] = useState(groceryItems);

  function handleAddItem(item) {
    setItems([...items, item]);
  }

  function handleRemoveItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToogleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  }

  function handleClearItems() {
    setItems([]);
  }

  return (
    <div className="relative mx-auto w-[700px]">
      <Header />
      <AddForm onAddItem={handleAddItem} />
      <GroceryList
        items={items}
        onRemoveItem={handleRemoveItem}
        onCheckItem={handleToogleItem}
        onClearItems={handleClearItems}
      />
      <Footer items={items} />
    </div>
  );
}

export default App;
