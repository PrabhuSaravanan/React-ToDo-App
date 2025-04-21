import { useContext, useState } from "react";
import { ToDoContext } from "../context/ToDoContext";

export const ToDoList: React.FC = () => {
  const context = useContext(ToDoContext);
  const [editId, setEditId] = useState<number | null>(null);
  const [editText, setEditText] = useState("");

  if (!context) return null;

  const { toDo, deleteToDo, editToDo } = context;

  const handleEdit = (id: number, text: string) => {
    setEditId(id);
    setEditText(text);
  };

  const handleSave = (id: number) => {
    editToDo(id, editText); // Call the editToDo from context
    setEditId(null);
    setEditText("");
  };

  return (
    <div className="space-y-2">
      {toDo.map((todo) => (
        <div key={todo.id} className="flex justify-between items-center p-2 bg-white shadow rounded">
          {editId === todo.id ? (
            <input
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              className="flex-1 px-2 py-1 border border-gray-300 rounded"
            />
          ) : (
            <span>{todo.text}</span>
          )}
          <div className="space-x-2">
            {editId === todo.id ? (
              <button onClick={() => handleSave(todo.id)} className="text-green-500 hover:underline">Save</button>
            ) : (
              <button onClick={() => handleEdit(todo.id, todo.text)} className="text-blue-500 hover:underline">Edit</button>
            )}
            <button onClick={() => deleteToDo(todo.id)} className="text-red-500 hover:underline">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};
