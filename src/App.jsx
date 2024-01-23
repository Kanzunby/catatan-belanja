import { useEffect, useState } from "react";
import "./App.css";
import AddForm from "./component/AddForm";
import Footer from "./component/Footer";
import GroceryList from "./component/GroceryList";
import Header from "./component/Header";

const groceryItems = [];

function App() {
  const [items, setItems] = useState(groceryItems);
  // const [totalPrice, setTotalPrice] = useState(0);

  console.log(items);

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

  // function totalHarga(items) {
  //   items.reduce((item, x) => {
  //     item[x].total;
  //   });
  //   return;
  // }

  // console.log(totalHarga);

  // useEffect(() => {
  //   setTotalPrice(totalPrice);
  // }, []);

  return (
    <div className="relative mx-auto w-[900px]">
      <Header />
      <AddForm onAddItem={handleAddItem} />
      <GroceryList
        items={items}
        onRemoveItem={handleRemoveItem}
        onCheckItem={handleToogleItem}
        onClearItems={handleClearItems}
        // totalPrice={totalPrice}
      />
      <Footer items={items} />
    </div>
  );
}

export default App;
