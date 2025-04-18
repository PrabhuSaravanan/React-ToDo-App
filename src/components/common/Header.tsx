export function Header () {


    return (
        <header className="px-4 bg-blue-500 py-3 text-white p-1 shadow-md">
            <div className=" flex justify-between items-center">
                <h1 className="font-mono">TO-DO</h1>
                <div className="relative">
                    <input 
                        type="search" 
                        className=" py-1 px-10 font-normal text-sm rounded-lg w-96 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
                        placeholder="Search tasks..." 
                    />
                    <span className="absolute left-3 top-0.5 text-gray-500">🔍</span>
                </div>
            </div>
        </header>
    )
}