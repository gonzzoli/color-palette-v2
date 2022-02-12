import { useRef, useState } from "react"


function DragBoxDropdown(props) {
    const [showingLayerInput, setShowingLayerInput] = useState(false)
    const layerInputRef = useRef()


    function deleteNode(e) {
        e.stopPropagation()
        props.onDeleteNode()
    }

    function showLayerInput(e) {
        e.stopPropagation()
        setShowingLayerInput(true)
    }

    function changeLayer(e) {
        e.preventDefault()
        props.onChangeLayer(layerInputRef.current.value)
        setShowingLayerInput(false)
    }

    function showColors(e) {
        e.stopPropagation()
    }

    return (
        <ul className="absolute cursor-default top-8 rounded-lg overflow-hidden select-none">
            <li 
            onClick={deleteNode}
            className="w-full py-2 px-1 bg-white 
            whitespace-nowrap hover:bg-slate-300 
            transition-all duration-200 font-bold">
                Delete
            </li>
            {showingLayerInput ?
            <form onSubmit={changeLayer}
            onClick={(e) => {e.stopPropagation()}}
            className="px-2 py-1 bg-slate-500 w-24" >
                <label htmlFor="layer" className="block text-white">Layer:</label>
                <input ref={layerInputRef} name="layer" 
                className="mt-1 mb-2 w-full" 
                type='number' max={99} min={0} />
                <button type="submit" 
                className="py-1 px-2 bg-slate-300 rounded-md font-bold mb-1">
                    Change</button>
            </form> 
            
            :
            <li 
            onClick={showLayerInput}
            className="w-full py-2 px-1 bg-white 
            whitespace-nowrap hover:bg-slate-300 
            transition-all duration-200 font-bold">
                Change Layer
            </li>}
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