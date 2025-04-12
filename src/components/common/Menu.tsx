export function Menu() {
    return (
        <nav className="bg-blue-500 border-t-2 min-h-screen w-64 shadow-md p-4 rounded-r-md text-center">
            <ul>
                <li className="py-2 px-2 bg-blue-100 text-blue-700 rounded-3xl cursor-pointer hover:bg-blue-200">
                    ADD TASK
                </li>
                <li className="py-2 px-2 text-gray-700 rounded-sm cursor-pointer mt-2 hover:bg-gray-200">
                    ALL TASKS
                </li>
            </ul>
        </nav>
    )
}