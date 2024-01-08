import { useState } from "react";

function AddForm({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!name) return;

    const newItem = {
      name,
      quantity,
      checked: false,
      id: Date.now(),
    };
    onAddItem(newItem);
  }

  const quantityNum = Array(20)
    .fill()
    .map((_, i) => (
      <option value={i + 1} key={i + 1}>
        {i + 1}
      </option>
    ));

  return (
    <div className="mx-auto w-full bg-background1 py-6">
      <h3 className="text-center text-2xl font-sans text-primary font-bold">
        Hari ini kita belanja apa?
      </h3>
      <form
        className="flex gap-2 items-center justify-between mx-auto w-2/3 mt-4"
        onSubmit={handleSubmit}
      >
        <select
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="w-20 h-10 text-md text-black text-center bg-background rounded-full focus:outline-none"
        >
          {quantityNum}
        </select>
        <input
          type="text"
          placeholder="nama barang..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="h-10 w-64 bg-background rounded-full px-6 focus:outline-none text-md"
        />
        <button className="w-32 h-10 bg-primary text-background text-md rounded-full">
          Tambah
        </button>
      </form>
    </div>
  );
}

export default AddForm;
