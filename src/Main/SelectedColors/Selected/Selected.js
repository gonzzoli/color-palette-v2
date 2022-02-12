import { faTimes } from "@fortawesome/free-solid-svg-icons"
import { faClipboard } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useDispatch } from "react-redux"
import { colorsActions } from "../../../store/store"
import { useRef } from "react"

function hexToRgb(hexString) {
    function hexCharToDec(char) {
        switch (char) {
            case 'a':
                return 10
            case 'b':
                return 11
            case 'c':
                return 12
            case 'd':
                return 13
            case 'e':
                return 14
            case 'f':
                return 15
            default:
                return Number(char)
        }
    }
    hexString = hexString.slice(1)
    let red;
    let green;
    let blue;
    red = hexCharToDec(hexString[0]) + 16*hexCharToDec(hexString[1])
    green = hexCharToDec(hexString[2]) + 16*hexCharToDec(hexString[3])
    blue = hexCharToDec(hexString[4]) + 16*hexCharToDec(hexString[5])
    console.log(red, green, blue)
    return `rgb(${red}, ${green}, ${blue})`
}



function Selected(props) {
    const dispatch = useDispatch()
    const codeRef = useRef()

    function removeColor() {
        dispatch(colorsActions.removeSelectedColor(props.color))
    }

    function copyToClipboard() {
        navigator.clipboard.writeText(codeRef.current.textContent)
    }

    return (
        <li className="group w-full flex gap-2 justify-start md:pr-2 items-center">
            <div style={{background: props.color}}
            className="w-7 h-7 rounded-md cursor-pointer flex items-center justify-center">
                <FontAwesomeIcon icon={faClipboard} onClick={copyToClipboard}
                className="w-5 h-5 opacity-0 group-hover:opacity-100 
                transition-all duration-200" />
            </div>
            <p ref={codeRef} style={{textTransform:props.code==='hex'?'uppercase':''}}>{props.code==='hex' ? props.color
            : hexToRgb(props.color)}</p>
            <FontAwesomeIcon onClick={removeColor} className="cursor-pointer ml-auto" icon={faTimes} />
        </li>
    )
}

export default Selected