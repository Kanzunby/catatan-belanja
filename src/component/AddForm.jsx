import { useState } from "react";

function AddForm({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [unit, setUnit] = useState("Pcs");
  const [price, setPrice] = useState("");
  const total = quantity * Number(price);

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !price) {
      return alert("Masukkan nama barang dan harga");
    } else if (isNaN(Number(price))) {
      return alert("Masukkan Angka pada input Harga!");
    }

    const newItem = {
      name,
      unit,
      quantity,
      price,
      total,
      checked: false,
      id: Date.now(),
    };
    onAddItem(newItem);
    return;
  }

  const quantityNum = Array(20)
    .fill()
    .map((_, i) => (
      <option value={i + 1} key={i + 1}>
        {i + 1}
      </option>
    ));

  const unitName = ["Pcs", "Kg", "Liter", "Buah"];

  return (
    <div className="mx-auto w-full bg-background1 py-4">
      <h3 className="text-center text-2xl font-sans text-primary font-bold">
        Hari ini kita belanja apa?
      </h3>
      <form
        className="flex gap-2 items-center justify-between mx-auto w-2/3 mt-4"
        onSubmit={handleSubmit}
      >
        <select
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="h-10 w-14 text-md text-black text-center bg-background rounded-full focus:outline-none"
        >
          {quantityNum}
        </select>
        <select
          value={unit}
          onChange={(e) => setUnit(e.target.value)}
          placeholder="unit"
          className="h-10 w-20 text-md text-black text-center bg-background rounded-full focus:outline-none"
        >
          {unitName.map((unit, i) => (
            <option value={unit} key={i}>
              {unit}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Nama barang..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="h-10 w-64 bg-background rounded-full px-6 focus:outline-none text-base"
        />
        <input
          type="text"
          placeholder="Harga"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="h-10 w-32 bg-background rounded-full px-4 focus:outline-none text-base"
        />
        <button className="w-32 h-10 bg-primary text-background text-md rounded-full">
          Tambah
        </button>
      </form>
    </div>
  );
}

export default AddForm;
