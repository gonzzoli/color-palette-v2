import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"
import { useRef } from "react"
import { useDispatch } from "react-redux"
import { colorsActions } from "../../../store/store"

function Favorite(props) {
    const elementRef = useRef()
    const dispatch = useDispatch()

    function removeFavorite() {
        dispatch(colorsActions.removeFavoriteColor(props.color))
    }
    
    return (
        <li ref={elementRef} id="favorites"
        onMouseEnter={()=>{elementRef.current.style.background = props.color}} 
        onMouseLeave={()=>{elementRef.current.style.background = ''}} className="w-full flex gap-2 justify-start
         items-center group first:rounded-t-md last:rounded-b-md p-2 pr-4 transition-all duration-200">
            <div id="favorites" className="p-1 group-hover:bg-black transition-all duration-200 rounded-md">
                <div id="favorites" style={{background: props.color}}
            className="w-7 h-7 rounded-md cursor-pointer"></div>
            </div>
            <p id="favorites" className="uppercase select-text">{props.color}</p>
            <FontAwesomeIcon id="favorites" onClick={removeFavorite} className="cursor-pointer ml-auto" icon={faTimes} />
        </li>
    )
}

export default Favorite