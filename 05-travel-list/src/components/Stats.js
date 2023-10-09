export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list. 🚀</em>
      </p>
    );

  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const completion = Math.round((packedItems / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {completion === 100
          ? `You got everything! Ready to go ✈️`
          : ` 💼 You have packed ${numItems} items on your list, and you already packed ${packedItems} (${completion}%)`}
      </em>
    </footer>
  );
}
