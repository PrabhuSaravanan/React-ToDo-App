// import { useReducer } from "react";

// const initialState = {
//   addTask: "",
//   addedTasks: [],
// };

// function toDoReducer(state, action) {
//   switch (action.type) {
//     case "Add-Task":
//       return {
//         ...state,
//         addedTasks: [...state.addedTasks, state.addTask],
//         addTask: "",
//       };
//   }
// }

// export function AddToDo() {
//   const [state, dispatch] = useReducer(toDoReducer, initialState);

//   // const [addTask, setAddTask] = useState("");
//   // const [addedTask, setAddedTask] = useState<string[]>([]);
//   // const [editTaskIndex, setEditTaskIndex] = useState<number | null>(null);
//   // const [isEditButtonClicked, setIsEditButtonClicked] = useState(false);

//   // function addTaskButtonClicked() {
//   //   if (!isEditButtonClicked) {
//   //     setAddedTask([...addedTask, addTask]);
//   //     setAddTask("");
//   //   } else {
//   //     if (editTaskIndex !== null) {
//   //       const updatedTasks = [...addedTask];
//   //       console.log("Updated Tasks - Copy:", updatedTasks);
//   //       console.log("Edit Task Index:", editTaskIndex);
//   //       updatedTasks[editTaskIndex] = addTask;
//   //       console.log("Updated Tasks:", updatedTasks);
//   //       setAddedTask(updatedTasks);
//   //       setAddTask("");
//   //       setIsEditButtonClicked(false);
//   //       setEditTaskIndex(null);
//   //     }
//   //   }
//   // }

//   // function onEditButtonClick(task: string, index: number) {
//   //   setIsEditButtonClicked(true);
//   //   setAddTask(task);
//   //   setEditTaskIndex(index);
//   // }

//   function handleInputChange(e) {
//     dispatch({
//       type: "UPDATE_INPUT",
//       payload: e.target.value,
//     });
//   }

//   function handleAddTask() {
//     if (state.addTask.trim()) {
//       dispatch({ type: "ADD_TASK" });
//     }
//   }

//   return (
//     <>
//       <div className="p-6 bg-white rounded-lg shadow-md w-full mt-6">
//         <div className="flex mb-4 gap-2">
//           <input
//             type="text"
//             value={state.addTask}
//             onChange={handleInputChange}
//             placeholder="Enter your task ..."
//             className="flex-1 text-md px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           {/* <button
//             onClick={handleAddTask}
//             className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg transition-colors"
//           >
//             {isEditButtonClicked ? "Update Task" : "Add Task"}
//           </button> */}
//         </div>

//         <div>
//           <h3>Tasks:</h3>
//           <ul>
//             {state.addedTasks.map((task, index) => (
//               <li key={index}>{task}</li>
//             ))}
//           </ul>
//         </div>

//         {/* <ToDoList onEditButtonClick={onEditButtonClick} /> */}
//       </div>
//     <>
// )


import { useReducer } from "react";

const initialState = {
  addTask: "",
  addedTasks: [],
};

function toDoReducer(state, action) {
  switch (action.type) {
    case "UPDATE_INPUT":
      return {
        ...state,
        addTask: action.payload,
      };
    case "ADD_TASK":
      return {
        ...state,
        addedTasks: [...state.addedTasks, state.addTask],
        addTask: "",
      };
    default:
      return state;  
  }
}

export function AddToDo() {
  const [state, dispatch] = useReducer(toDoReducer, initialState);

  function handleInputChange(e) {
    dispatch({
      type: "UPDATE_INPUT",
      payload: e.target.value,
    });
  }

  function handleAddTask() {
    if (state.addTask.trim()) {
      dispatch({ type: "ADD_TASK" });
    }
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-md w-full mt-6">
      <div className="flex mb-4 gap-2">
        <input
          type="text"
          value={state.addTask}
          onChange={handleInputChange}
          placeholder="Enter your task ..."
          className="flex-1 text-md px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleAddTask}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg transition-colors"
        >
          Add Task
        </button>
      </div>

      <div>
        <h3 className="font-medium text-gray-800">Tasks:</h3>
        <ul className="mt-2">
          {state.addedTasks.map((task, index) => (
            <li key={index} className="text-gray-700 mb-1">
              {index + 1}. {task}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}