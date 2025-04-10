export function Header () {


    return (
        <header className="bg-blue-600 text-white p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">To-Do</h1>
                <div className="relative">
                    <input 
                        type="search" 
                        className="px-4 py-2 rounded-lg w-64 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
                        placeholder="Search tasks..." 
                    />
                    <span className="absolute right-3 top-2.5 text-gray-500">🔍</span>
                </div>
            </div>
        </header>
    )
}