import { AddTodo, Todos } from "./components";

function App() {
  return (
    <div className="flex justify-center p-4 min-h-screen bg-gray-500">
      <div>
        <h1 className="p-4 text-3xl text-center">Redux toolkit</h1>
        <AddTodo />
        <Todos />
      </div>
    </div>
  );
}

export default App;
