

function DragBoxDropdown(props) {

    function deleteNode(e) {
        e.stopPropagation()
    }

    function showLayers(e) {
        e.stopPropagation()
    }

    function showColors(e) {
        e.stopPropagation()
    }

    return (
        <ul className="absolute top-8 rounded-lg overflow-hidden select-none">
            <li 
            onClick={deleteNode}
            className="w-full py-2 px-1 bg-white 
            whitespace-nowrap hover:bg-slate-300 
            transition-all duration-200 font-bold">
                Delete
            </li>
            <li 
            onClick={showLayers}
            className="w-full py-2 px-1 bg-white 
            whitespace-nowrap hover:bg-slate-300 
            transition-all duration-200 font-bold">
                Change Layer
            </li>
            <li 
            onClick={showColors}
            className="w-full py-2 px-1 bg-white 
            whitespace-nowrap hover:bg-slate-300 
            transition-all duration-200 font-bold">
                Colors
            </li>
        </ul>
    )
}

export default DragBoxDropdown