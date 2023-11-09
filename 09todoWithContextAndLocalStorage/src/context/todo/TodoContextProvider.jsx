import { useState, useEffect } from "react";
import { TodoContext } from "./todoContext";

import { useLocalStorage } from "../../hooks/useLocalStorage";

export default function TodoContextProvider({ children }) {
  const [todos, setTodos] = useState([]);

  const { setItem, getItem } = useLocalStorage("todos");

  const addTodo = (todo) => {
    setTodos((prev) => [todo, ...prev]);
  };
  const updateTodo = (id, updatedTodo) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? updatedTodo : todo))
    );
  };
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => !todo.id === id));
  };
  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  useEffect(() => {
    const localTodos = getItem();
    if (localTodos && localTodos.length > 0) {
      setTodos(localTodos);
    }
  }, []);

  useEffect(() => {
    setItem(todos);
  }, [todos]);
  return (
    <TodoContext.Provider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      {children}
    </TodoContext.Provider>
  );
}
