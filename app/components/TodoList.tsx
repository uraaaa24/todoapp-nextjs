
const TodoList = () => {
  return (
    <ul className="space-y-3">
      {/* TODO: サンプルデータを実際のデータに置き換える */}
      <li className="flex justify-between p-4 bg-white border-l-4 border-blue-500 rounded shadow">
        <span>散歩</span>
        <div className="flex gap-3">
          <button className="text-green-500">Edit</button>
          <button className="text-red-500">Delete</button>
        </div>
      </li>
    </ul>
  )
}

export default TodoList
