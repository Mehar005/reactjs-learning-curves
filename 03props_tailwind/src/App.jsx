import "./App.css";

import Card from "./components/Card";

function App() {
  return (
    <>
      <h1 className="bg-green-400 p-4 rounded-lg mb-5">Tailwind with react</h1>

      <Card username="User 1" />
      <Card />
    </>
  );
}

export default App;
