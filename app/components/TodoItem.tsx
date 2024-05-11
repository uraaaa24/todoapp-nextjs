import { Todo } from "@/types/todo"

interface TodoItemProps {
  todo: Todo
}

const TodoItem = ({todo}: TodoItemProps) => {
  return (
    <li  className="flex justify-between p-4 bg-white border-l-4 border-blue-500 rounded shadow">
    <span>{todo.title}</span>
    <div className="flex gap-3">
      <button className="text-green-500">Edit</button>
      <button className="text-red-500">Delete</button>
    </div>
  </li>
  )
}

export default TodoItem
