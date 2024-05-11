import { Todo } from "@/types/todo";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: Todo[];
}

const TodoList = ({todos}: TodoListProps ) => {
  return (
    <ul className="space-y-3">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo}/>
      ))}
    </ul>
  )
}

export default TodoList
