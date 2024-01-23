import { useState } from "react";
import Item from "../croceryListItem/Item";

function GroceryList({ items, onRemoveItem, onCheckItem, onClearItems }) {
  const [sortBy, setSortBy] = useState("input");
  // console.log(Number(items[1].price) * items[1].quantity);
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

  const totalPrice = items?.reduce((acc, curr) => acc + curr.total, 0);

  return (
    <>
      <div className="py-8 h-screen md:h-80 w-full md:py-2 bg-slate-50 overflow-y-scroll bg-contain bg-center">
        <table className="list-none flex flex-col items-start mx-4 text-xl text-black table-fixed">
          <tr className="flex items-center gap-2 justify-center py-1 w-full text-base mx-auto border border-black">
            <th className="px-1 mx-2 w-10">Cek</th>
            <th className="px-1 mx-2 w-14">Jml</th>
            <th className="px-1 mx-1 w-16">Satuan</th>
            <th className="px-1 mx-1 w-72">Nama Barang</th>
            <th className="px-1 mx-1 w-28">Harga</th>
            <th className="px-1 mx-1 w-28">Total</th>
            <th className="px-1 mx-1 w-16">Hapus</th>
          </tr>
          {sortedItems.map((item) => (
            <Item
              item={item}
              key={item.id}
              onRemoveItem={onRemoveItem}
              onCheckItem={onCheckItem}
            />
          ))}
          <tr className="flex items-center gap-2 justify-center py-1 w-full text-base mx-auto border border-black">
            <th className="px-1 mx-2 w-10"></th>
            <th className="px-1 mx-2 w-14"></th>
            <th className="px-1 mx-1 w-16"></th>
            <th className="px-1 mx-1 w-72">Total Harga</th>
            <th className="px-1 mx-1 w-28"></th>
            <th className="px-1 mx-1 w-28 flex items-center justify-between">
              <p>Rp.</p>
              <span>{totalPrice}</span>
            </th>
            <th className="px-1 mx-1 w-16"></th>
          </tr>
        </table>
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
        <div></div>
      </div>
    </>
  );
}

export default GroceryList;
