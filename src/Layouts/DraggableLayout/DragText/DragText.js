import { faEllipsisV, faUpDownLeftRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useRef, useState } from "react"
import Draggable from "react-draggable"
import DragTextDropdown from "./DragTextDropdown"


function DragText(props) {
    const nodeRef = useRef()
    const textRef = useRef()
    const [showingTextOptions, setShowingTextOptions] = useState(false)
    const colors = props.colors
    function openOptions() {
        nodeRef.current.style.overflow = 'visible'
        setShowingTextOptions(true)
    }

    function closeOptions() {
        nodeRef.current.style.overflow = 'hidden'
        setShowingTextOptions(false)
    }

    function deleteNode() {
        nodeRef.current.style.display = "none"
    }

    function changeColor(color) {
        textRef.current.style.color = color
    }

    function changeSize(size) {
        textRef.current.style.fontSize = size + 'px'
    }

    function changeText(text) {
        textRef.current.textContent = text
    }

    function changeWeight() {
        const currentWeight = textRef.current.style.fontWeight
        if(currentWeight==='' || currentWeight==='normal') {
            textRef.current.style.fontWeight = 'bold'
            return
        }
        textRef.current.style.fontWeight = 'normal'
    }

    return (
        <Draggable handle="#handler" bounds='parent' nodeRef={nodeRef}>
            <div ref={nodeRef}
            className="hover:resize hover:overflow-hidden p-1 
            inline-block border-2 border-black 
            border-opacity-0 hover:border-opacity-100 
            transition-[border-opacity] duration-200 group absolute" >
                <div className="opacity-0 group-hover:opacity-100 
                absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                flex justify-center gap-3 items-center transition-all duration-200" >
                    <FontAwesomeIcon 
                    onClick={openOptions}
                    className="text-white text-xl p-1 px-2 bg-slate-900 
                    rounded-full flex justify-center items-center cursor-pointer" icon={faEllipsisV} />
                    <FontAwesomeIcon id="handler" className="text-white text-xl p-1 bg-slate-900 
                    rounded-full flex justify-center items-center cursor-grab active:cursor-grabbing" icon={faUpDownLeftRight} />
                    {showingTextOptions && <DragTextDropdown 
                    onBlur={closeOptions}
                    onColorChange={changeColor}
                    onSizeChange={changeSize}
                    onTextChange={changeText}
                    onWeightToggle={changeWeight}
                    onDeleteNode={deleteNode} colors={colors} />}
                </div>
                <p ref={textRef} className="break-words">Hola text aaahhas</p>
            </div>
        </Draggable>
    )
}

export default DragText