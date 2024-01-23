function Item({ item, onRemoveItem, onCheckItem }) {
  // const total = item.quantity * Number(item.price);
  return (
    <tr
      key={item.id}
      className="flex items-center justify-center gap-2 text-base w-full py-2 border border-b-slate-400 border-t-0 border-x-0"
      style={item.checked ? { textDecoration: "line-through" } : {}}
    >
      <td className="px-1 mx-2 w-10 text-center">
        <input
          type="checkbox"
          checked={item.checked}
          onChange={() => onCheckItem(item.id)}
          className="h-4 w-4 accent-primary"
        />
      </td>
      <td className="px-1 mx-2 w-14 text-center">{item.quantity}</td>
      <td className="px-1 mx-2 w-16 text-center">{item.unit}</td>
      <td className="px-1 mx-2 w-72 text-start">{item.name}</td>
      <td className="px-1 mx-2 w-28 text-center flex items-center justify-between">
        <p>Rp</p> <span>{Number(item.price)}</span>
      </td>
      <td className="px-1 mx-2 w-28 text-center flex items-center justify-between">
        <p>Rp.</p> <span>{item.total}</span>
      </td>
      <td className="px-1 mx-2 w-16 flex items-center justify-center">
        <button
          className="flex items-center justify-center cursor-pointer text-lg p-0 w-6 h-6 bg-red-700 rounded-full text-background"
          onClick={() => onRemoveItem(item.id)}
        >
          &times;
        </button>
      </td>
    </tr>
  );
}

export default Item;
