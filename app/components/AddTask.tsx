"use client"

import { Todo } from "@/types/todo";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { v4 as uuidV4 } from "uuid";

const addTodo = async (todo: Todo): Promise<Todo> => {
  const response = await fetch("http://localhost:8000/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  const newTodo = await response.json();

  return newTodo;
}
const AddTask = () => {
  const router = useRouter() 

  const [todoTitle, setTodoTitle] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    await addTodo({
      id: uuidV4(),
      title: todoTitle
    })

    setTodoTitle("")
    router.refresh()
  }

  return (
    <form onSubmit={handleSubmit} className="mb-4 space-y-3">
      <input type="text" onChange={(e) => setTodoTitle(e.target.value)} value={todoTitle} className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:border-blue-400"/>
      <button className="w-full px-4 py-2 text-white bg-blue-500 rounded transform hover:bg-blue-400 hover:scale-95 duration-200">Add task</button>
    </form>
  )
}

export default AddTask
