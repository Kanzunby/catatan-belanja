import { useState } from "react";
import Item from "../croceryListItem/Item";

function GroceryList({ items, onRemoveItem, onCheckItem, onClearItems }) {
  const [sortBy, setSortBy] = useState("input");
  console.log(items);

  let sortedItems;

  // Code Biasa

  // if (sortBy === "input") {
  //   sortedItems = items;
  // } else if (sortBy === "name") {
  //   sortedItems = items.slice().sort((a, b) => a.name.localeCompare(b.name));
  // } else {
  //   sortedItems = items.slice().sort((a, b) => b.checked - a.checked);
  // }

  // Code Baru

  switch (sortBy) {
    case "name":
      sortedItems = items.slice().sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "checked":
      sortedItems = items.slice().sort((a, b) => a.checked - b.checked);
      break;
    default:
      sortedItems = items;
      break;
  }

  return (
    <>
      <div className="py-8 h-screen md:py-2 md:h-60 bg-[url('assets/paper-bg.jpg')] bg-repeat-y  overflow-y-scroll bg-contain bg-center">
        <ul className="list-none flex flex-col gap-[12px] items-start mx-10 text-xl text-black">
          {sortedItems.map((item) => (
            <Item
              item={item}
              key={item.id}
              onRemoveItem={onRemoveItem}
              onCheckItem={onCheckItem}
            />
          ))}
        </ul>
      </div>
      <div className="bg-scond w-full py-4 text-center flex gap-5 justify-center">
        <select
          className="text-sm px-5 py-0 bg-background rounded-full focus:outline-none"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="input">Urutkan berdasarkan urutan input</option>
          <option value="name">Urutkan berdasarkan nama barang</option>
          <option value="checked">Urutkan berdasarkan ceklis</option>
        </select>
        <button
          className="px-3 py-2 bg-primary rounded-full text-background text-sm"
          onClick={onClearItems}
        >
          Bersihkan Daftar
        </button>
      </div>
    </>
  );
}

export default GroceryList;
