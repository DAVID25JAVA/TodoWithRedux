import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";

function App() {
  return (
    <>
      <p className="text-center text-2xl font-serif my-5 text-gray-400">
        Chai Aur Redux
      </p>
      <div className="container mx-auto">
      <AddTodo />
      <Todo />
      </div>
    </>
  );
}

export default App;
