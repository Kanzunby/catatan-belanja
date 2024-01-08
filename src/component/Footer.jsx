function Footer({ items }) {
  const totalItems = items.length;
  const checkedItems = items.filter((item) => item.checked).length;
  const percentage = Math.round((checkedItems / totalItems) * 100);

  return (
    <div className="bg-background2 text-background text-center py-4">
      {items.length === 0 ? (
        <footer className="text-sm font-bold">
          Daftar belanja masih kosong. Belum ada barang yang dibeli
        </footer>
      ) : (
        <footer className="text-sm font-bold">
          Ada {totalItems} barang di daftar belanjaan, {checkedItems} barang
          sudah dibeli ({percentage}%)
        </footer>
      )}
    </div>
  );
}

export default Footer;
