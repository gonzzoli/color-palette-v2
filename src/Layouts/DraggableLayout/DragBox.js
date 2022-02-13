import { faEllipsisV } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useRef, useState } from "react"
import Draggable from "react-draggable"
import DragBoxDropdown from "./DragBoxDropdown"

function rgbToHex(rgbString=''){
    rgbString = rgbString.match(/\(([^)]+)\)/)[1].split(',')
    let hexString = ''
    function rgbNumToHex(num){
        let string = ''
        let aux = Math.floor(num/16)
        let remainder = num%16
        switch (aux) {
            case 10:
                string += 'A'
                break;
            case 11:
                string += 'B'
                break;
            case 12:
                string += 'C'
                break;
            case 13:
                string += 'D'
                break;
            case 14:
                string += 'E'
                break;
            case 15:
                string += 'F'
                break;
            default:
                string += aux
                break;
        }
        switch (remainder) {
            case 10:
                string += 'A'
                break;
            case 11:
                string += 'B'
                break;
            case 12:
                string += 'C'
                break;
            case 13:
                string += 'D'
                break;
            case 14:
                string += 'E'
                break;
            case 15:
                string += 'F'
                break;
            default:
                string += remainder
                break;
        }
        return string
    }
    rgbString.forEach(value => {
        hexString += rgbNumToHex(Number(value.trim()))
    })
    return '#' + hexString
}

function DragBox(props) {
    const nodeRef = useRef()
    const [showOptions, setShowOptions] = useState(false)
    const colors = props.colors
    let lastSize = {}

    useEffect(() => {
        lastSize = {
            x: nodeRef.current.offsetWidth, 
            y: nodeRef.current.offsetHeight
        }
    }, [])

    function getNextColor(current) {
        const index = colors.indexOf(rgbToHex(current.toLowerCase()).toLowerCase())
        if(index===colors.length-1) return colors[0]
        return colors[index+1]
    }

    function checkSize(e) {
        if(lastSize.x===nodeRef.current.offsetWidth && lastSize.y ===nodeRef.current.offsetHeight) {
            changeColor(e)
            return
        }
        lastSize = {
            x: nodeRef.current.offsetWidth,
            y: nodeRef.current.offsetHeight
        }
        
    }

    function changeColor(e) {
        if(e.target===nodeRef.current) {
            nodeRef.current.style.background = getNextColor(nodeRef.current.style.background)
        }
    }

    function setColor(color) {
        nodeRef.current.style.background = color
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

    return (
        <Draggable
        nodeRef={nodeRef} 
        bounds='parent'
        handle='#handler'>
            <div ref={nodeRef} 
            onClick={checkSize}
            style={{background: colors[0]}}
            className='w-20 h-20
            overflow-hidden hover:resize group absolute'>
                <div id='handler'
                className='w-4 h-4 rounded-full 
                group-hover:bg-white group-hover:shadow-xl 
                transition-all absolute right-2 top-2'></div>
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
                    currentLayer={nodeRef.current.style.zIndex} />}
                </div>
            </div>
        </Draggable>
    )
}

export default DragBox