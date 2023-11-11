import Counter from "./Counter";

function App() {
  return (
    <Counter>
      <Counter.Label>My flexible counter</Counter.Label>
      <Counter.Decrease icon="◀️" />
      <Counter.Count />
      <Counter.Increase icon="▶️" />
    </Counter>
  );
}

export default App;
