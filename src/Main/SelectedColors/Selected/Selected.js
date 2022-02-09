import { faTimes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useDispatch } from "react-redux"
import { colorsActions } from "../../../store/store"

function hexToRgb(hexString) {
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

function Selected(props) {
    const dispatch = useDispatch()

    function removeColor() {
        dispatch(colorsActions.removeSelectedColor(props.color))
    }

    return (
        <li className="w-full flex gap-2 justify-start md:pr-2 items-center">
            <div style={{background: props.color}}
            className="w-7 h-7 rounded-md cursor-pointer"></div>
            {props.code==='hex'? 
            <p className="uppercase">{props.color}</p>
            : <p>{hexToRgb(props.color)}</p>}
            <FontAwesomeIcon onClick={removeColor} className="cursor-pointer ml-auto" icon={faTimes} />
        </li>
    )
}

export default Selected