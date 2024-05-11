"use client"

import { Todo } from "@/types/todo";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const editTodo = async (id: string, newTitle: string): Promise<Todo> => {
  const response = await fetch(`http://localhost:8000/todos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: newTitle,
    }),
  });
  const updatedTodo = await response.json();

  return updatedTodo;
}

interface TodoItemProps {
  todo: Todo
}

const TodoItem = ({todo}: TodoItemProps) => {
  const router = useRouter()

  const ref = useRef<HTMLInputElement>(null)

  const [isEditing, setIsEditing] = useState(false)
  const [editedTitle, setEditedTitle] = useState(todo.title)

  const handleEdit = async () => {
    setIsEditing(true)
  }

  const handleSave = async () => {
    await editTodo(todo.id, editedTitle)
    setIsEditing(false)

    router.refresh()
  }

  useEffect(() => {
    if (isEditing) {
      ref.current?.focus()
    }
  }, [isEditing])

  return (
    <li  className="flex justify-between p-4 bg-white border-l-4 border-blue-500 rounded shadow">
      {isEditing ? (
        <input ref={ref} type="text" value={editedTitle} onChange={(e) => setEditedTitle(e.target.value)} className="mr-2 py-1 px-2 border-gray-400 border" />
      ) : (
        <span>{todo.title}</span>
      )}
    <div className="flex gap-3">
      {isEditing ? (
        <button onClick={handleSave} className="text-blue-500">Save</button>
      ) : (
        <button onClick={handleEdit} className="text-green-500">Edit</button>
      )}
      <button className="text-red-500">Delete</button>
    </div>
  </li>
  )
}

export default TodoItem
