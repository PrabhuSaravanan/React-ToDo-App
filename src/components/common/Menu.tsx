export function Menu () {
return (
    <nav className="bg-gray-100 min-h-screen w-64 shadow-md p-4">
    <h2 className="text-lg font-semibold mb-4 text-gray-700 border-b pb-2">Menu</h2>
    <ul className="space-y-2">
        <li className="py-2 px-4 bg-blue-100 text-blue-700 rounded-md font-medium cursor-pointer hover:bg-blue-200">
            Add Task
        </li>
        <li className="py-2 px-4 text-gray-700 rounded-md font-medium cursor-pointer hover:bg-gray-200">
            All Tasks
        </li>
        <li className="py-2 px-4 text-gray-700 rounded-md font-medium cursor-pointer hover:bg-gray-200">
            Completed
        </li>
        <li className="py-2 px-4 text-gray-700 rounded-md font-medium cursor-pointer hover:bg-gray-200">
            Important
        </li>
    </ul>
</nav>
)
}