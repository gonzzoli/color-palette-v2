import { useEffect, useRef, useState } from "react"

const optionsClasses = `w-full py-2 px-1 bg-slate-200
whitespace-nowrap hover:bg-slate-300 
transition-all duration-200 font-bold`

function DragBoxDropdown(props) {
    const [showingLayerInput, setShowingLayerInput] = useState(false)
    const [showingColors, setShowingColors] = useState(false)
    const [showingBorderInput, setShowingBorderInput] = useState(false)
    const layerInputRef = useRef()
    const radiusInputRef = useRef()
    const dropdownRef = useRef()

    useEffect(() => {
        function checkBlur(e) {
            if(dropdownRef.current.contains(e.target)) return
            props.onBlur()
        }

        window.addEventListener('click', checkBlur)
        return () => {
            window.removeEventListener('click', checkBlur)
        }
    }, [])

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
        setShowingColors(true)
    }

    function setColor(color) {
        props.onSetColor(color)
    }

    function showBorderInput(e) {
        e.stopPropagation()
        setShowingBorderInput(true)
    }

    function changeRadius(e) {
        e.preventDefault()
        props.onChangeRadius(radiusInputRef.current.value)
    }
    
    return (
        <ul ref={dropdownRef} className="z-50 absolute cursor-default 
        top-8 rounded-lg overflow-hidden select-none">
            <li 
            onClick={deleteNode}
            className={optionsClasses}>
                Delete
            </li>
            {showingLayerInput ?
            <form onSubmit={changeLayer}
            onClick={(e) => {e.stopPropagation()}}
            className="px-2 py-1 bg-slate-500 w-full" >
                <label htmlFor="layer" className="block text-white">Layer:</label>
                <input ref={layerInputRef} name="layer" 
                className="mt-1 mb-2 w-full p-0.5" 
                type='number' max={40} min={-40} defaultValue={props.currentLayer || 0} />
                <button type="submit" 
                className="py-1 px-2 bg-slate-300 rounded-md text-sm font-bold mb-1">
                    Change</button>
            </form>
            :
            <li 
            onClick={showLayerInput}
            className={optionsClasses}>
                Change Layer
            </li>}
            {showingColors ? 
            <ul className="w-full overflow-x-hidden 
            overflow-y-scroll h-52 scrollbar-thumb-gray-900
            scrollbar-thin">
                {props.colors.map(color => {
                    return (
                        <li 
                        key={color}
                        onClick={() => {setColor(color)}}
                        style={{background: color}}
                        className="h-7 w-full cursor-pointer"></li>
                    )
                })}  
            </ul>
            :
            <li 
            onClick={showColors}
            className={optionsClasses}>
                Colors
            </li>}
            {showingBorderInput ? 
            <form onSubmit={changeRadius}
            onClick={(e) => {e.stopPropagation()}}
            className="px-2 py-1 bg-slate-500 w-full" >
                <label htmlFor="radius" className="block text-white">Radius
                <span className="text-xs ml-2">(px)</span></label>
                <input ref={radiusInputRef} name="radius" 
                className="mt-1 mb-2 w-full p-0.5" 
                type='number' max={9999} min={0} defaultValue={props.currentRadius.slice(0, -2) || 0} />
                <button type="submit" 
                className="py-1 px-2 bg-slate-300 rounded-md text-sm font-bold mb-1">
                    Change</button>
            </form>
            :
            <li onClick={showBorderInput} className={optionsClasses} >Border Radius</li>
            }
        </ul>
    )
}

export default DragBoxDropdown