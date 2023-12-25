export default function Stats({ items }) {
  let totalItems = items.length;
  let packedItem = items && items.filter((item) => item.packed).length;
  let percent = (packedItem / totalItems) * 100;
  return (
    <footer className="stats">
      💼 You have {totalItems} item in your list, and you have already packed
      {packedItem} {percent} %
    </footer>
  );
}
