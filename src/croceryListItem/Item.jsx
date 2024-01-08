function Item({ item, onRemoveItem, onCheckItem }) {
  return (
    <div>
      <li key={item.id} className="flex items-center gap-5 text-xl">
        <input
          type="checkbox"
          checked={item.checked}
          onChange={() => onCheckItem(item.id)}
          className="h-4 w-4 accent-primary"
        />
        <span style={item.checked ? { textDecoration: "line-through" } : {}}>
          {item.quantity} {item.name}
        </span>
        <button
          className="flex items-center justify-center cursor-pointer text-lg p-0 w-6 h-6 bg-red-700 rounded-full text-background"
          onClick={() => onRemoveItem(item.id)}
        >
          &times;
        </button>
      </li>
    </div>
  );
}

export default Item;
