import { TodoType } from "@/types/TodoType";
import { create } from "zustand";

type StoreType = {
  todos: TodoType[];
  addTodo: (newTodo: TodoType) => void;
  removeAll: () => void;
  removeCompleted: () => void;
  removeTodo: (todoId: number) => void;
  toggleComplete: (id: number) => void;
};

const useStore = create<StoreType>((set, get) => ({
  todos: [],

  addTodo(newTodo) {
    const newTodos = [...get().todos, newTodo];
    set({ todos: newTodos });
  },

  removeAll() {
    set({ todos: [] });
  },

  removeCompleted() {
    const incompletedTasks = get().todos.filter(
      ({ completed }) => completed === false
    );
    set({ todos: incompletedTasks });
  },

  removeTodo(todoId) {
    const filteredTodos = get().todos.filter(({ id }) => id !== todoId);
    set({ todos: filteredTodos });
  },

  toggleComplete(id) {
    const updatedTodos = get().todos.map((todo) => {
      if (todo.id === id) return { ...todo, completed: !todo.completed };
      return todo;
    });
    set({ todos: updatedTodos });
  },
}));

export default useStore;
