import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"
import { useRef } from "react"
import { useDispatch } from "react-redux"
import { colorsActions } from "../../../store/store"

function CollectionColor(props) {
    const elementRef = useRef()
    const dispatch = useDispatch()

    function removeColor() {
        dispatch(colorsActions.removeFromCollection({collection:props.collection, color: props.color}))
    }

    return (
        <li id="collections" 
        ref={elementRef}
        onMouseEnter={()=>{elementRef.current.style.background = props.color}} 
        onMouseLeave={()=>{elementRef.current.style.background = ''}}
        className="w-full flex gap-2 py-1 px-2 pr-4 md:pr-6 justify-start items-center
         hover:bg-slate-200 group">
            <div id="collections" className="p-1 group-hover:bg-black transition-all duration-200 rounded-md">
                <div id="collections" style={{background: props.color}}
            className="w-7 h-7 rounded-md cursor-pointer"></div>
            </div>
            <p id="collections" className="uppercase">{props.color}</p>
            <FontAwesomeIcon onClick={removeColor} id="collections" className="cursor-pointer ml-auto" icon={faTimes} />
        </li>
    )
}

export default CollectionColor