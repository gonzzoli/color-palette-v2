import { useRef, useEffect, useState } from "react"

 

function DragTextDropdown(props) {
    const dropdownRef = useRef()
    const sizeInputRef = useRef()
    const textInputRef = useRef()
    const weightRef = useRef()
    const [showingColors, setShowingColors] = useState(false)
    const [showingSizeForm, setShowingSizeForm] = useState(false)
    const [showingTextForm, setShowingTextForm] = useState(false)

    const optionsClasses = `w-full py-2 px-2 bg-slate-200 
    whitespace-nowrap hover:bg-slate-300 
    transition-all duration-200 font-bold`

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

    function deleteNode() {
        props.onDeleteNode()
    }

    function showColors(e) {
        e.stopPropagation()
        setShowingColors(true)
        setShowingSizeForm(false)
        setShowingTextForm(false)
    }

    function setColor(color) {
        props.onColorChange(color)
    }

    function openSizeForm(e) {
        e.stopPropagation()
        setShowingSizeForm(true)
        setShowingColors(false)
        setShowingTextForm(false)
    }

    function changeSize(e) {
        e.preventDefault()
        props.onSizeChange(sizeInputRef.current.value)
    }

    function openTextForm(e) {
        e.stopPropagation()
        setShowingTextForm(true)
        setShowingColors(false)
        setShowingSizeForm(false)
    }

    function changeText(e) {
        e.preventDefault()
        props.onTextChange(textInputRef.current.value)
    }

    function toggleTextWeight(e) {
        e.stopPropagation()
        const oppositeWeight = weightRef.current.style.fontWeight
        if(oppositeWeight==='normal') {
            weightRef.current.style.fontWeight = 'bold'
        } else {
            weightRef.current.style.fontWeight = 'normal'
        }
        
        props.onWeightToggle()
    }

    return (
        <ul 
        style={{width: showingTextForm ? '13rem' : 'auto'}}
        ref={dropdownRef} className="absolute top-8 select-none
        rounded-lg overflow-hidden">
            <li 
            onClick={deleteNode}
            className={optionsClasses}>Delete</li>
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
            <li onClick={showColors} className={optionsClasses}>Colors</li>
            }
            {showingSizeForm ? 
            <form onSubmit={changeSize}
            className="px-2 py-1 bg-slate-500 w-full" >
                <label className="block text-white">Size 
                <span className="text-xs ml-2">(px)</span></label>
                <input className="mt-1 mb-2 w-full p-0.5" 
                ref={sizeInputRef} type="number" max={128} min={1} 
                defaultValue={16} />
                <button className="py-1 px-2 bg-slate-300 
                rounded-md font-bold text-sm mb-1" 
                type="submit">Change</button>
            </form>
            :
            <li onClick={openSizeForm} className={optionsClasses}>Font Size</li>
            }
            {showingTextForm ?
            <form onSubmit={changeText}
            className="px-2 py-1 w-full bg-slate-500" >
                <label className="block text-white">Text: </label>
                <textarea className="mt-1 mb-2 w-full p-0.5" 
                ref={textInputRef}></textarea>
                <button className="py-1 px-2 bg-slate-300 
                rounded-md font-bold text-sm mb-1" 
                type="submit">Change</button>
            </form>
            :
            <li onClick={openTextForm} className={optionsClasses}>Edit Text</li>}
            <li 
            style={{fontWeight: 'bold'}}
            ref={weightRef}
            onClick={toggleTextWeight} 
            className={optionsClasses} >Weight</li>
        </ul>
    )
}

export default DragTextDropdown