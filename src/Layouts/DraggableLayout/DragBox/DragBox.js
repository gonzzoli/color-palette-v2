import { faEllipsisV } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useRef, useState } from "react"
import Draggable from "react-draggable"
import { useSelector } from "react-redux"
import DragBoxDropdown from "./DragBoxDropdown"

function DragBox() {
    const nodeRef = useRef()
    const [showOptions, setShowOptions] = useState(false)
    const colors = useSelector(state => state.colors.selected)
    const [bgColor, setBgColor] = useState(colors[0])
    const [lastSize, setLastSize] = useState({
        x: 80, 
        y: 80
    })

    function checkSize(e) {
        if(lastSize.x===nodeRef.current.offsetWidth && lastSize.y===nodeRef.current.offsetHeight) {
            changeColor(e)
            return
        }
        setLastSize({
            x: nodeRef.current.offsetWidth,
            y: nodeRef.current.offsetHeight
        })
    }

    function changeColor(e) {
        function getNextColor() {
            const index = colors.indexOf(bgColor)
            if(index===colors.length-1) return colors[0]
            return colors[index+1]
        }

        if(e.target===nodeRef.current) {
            setBgColor(getNextColor())
        }
    }

    function setColor(color) {
        setBgColor(color)
    }

    function changeLayer(layer) {
        nodeRef.current.style.zIndex = String(layer)
    }

    function openOptions() {
        nodeRef.current.style.overflow = 'visible'
        setShowOptions(true)
    }

    function closeOptions() {
        nodeRef.current.style.overflow = 'hidden'
        setShowOptions(false)
    }

    function deleteNode(){
        nodeRef.current.style.display = 'none'
    }

    function changeLayer(layer) {
        nodeRef.current.style.zIndex = layer
    }

    function changeRadius(radius) {
        nodeRef.current.style.borderRadius = radius + 'px'
    }

    return (
        <Draggable
        nodeRef={nodeRef} 
        bounds='parent'
        handle='#handler'>
            <div ref={nodeRef} 
            onClick={checkSize}
            style={{background: bgColor}}
            className='w-20 h-20
            overflow-hidden hover:resize group absolute z-0'>
                <div id='handler'
                className='w-4 h-4 rounded-full 
                group-hover:bg-white group-hover:shadow-xl 
                transition-all absolute right-2 top-2 cursor-grab active:cursor-grabbing'></div>
                <div
                onClick={openOptions}
                className="relative inline-block text-sm top-1 left-1 cursor-pointer bg-slate-100 
                py-1 px-2 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-200">
                    <FontAwesomeIcon icon={faEllipsisV} />
                    {showOptions && <DragBoxDropdown 
                    onChangeLayer={changeLayer}
                    onDeleteNode={deleteNode} 
                    onBlur={closeOptions}
                    colors={colors}
                    onSetColor={setColor}
                    onChangeRadius={changeRadius}
                    currentLayer={nodeRef.current.style.zIndex}
                    currentRadius={nodeRef.current.style.borderRadius} />}
                </div>
            </div>
        </Draggable>
    )
}

export default DragBox