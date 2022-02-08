import { faHeart } from "@fortawesome/free-regular-svg-icons"
import { faListDots } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { colorsActions } from "../../../store/store"
import CollectionsDropdown from "./CollectionsDropdown/CollectionsDropdown"

function ColorBox(props) {
    const dispatch = useDispatch()
    const [showCollections, setShowCollections] = useState(false)

    function addToSelected(e) {
        if(e.target.id!=='color-box')return
        dispatch(colorsActions.addSelectedColor(props.color))
    }

    function addToFavorites(e) {
        e.stopPropagation()
        dispatch(colorsActions.addFavoriteColor(props.color))
    }

    function toggleCollectionOptions(e) {
        e.stopPropagation()
        setShowCollections(prevState => !prevState)
    }

    return (
        <div onClick={addToSelected}
        id="color-box"
        onMouseLeave={() => {setShowCollections(false)}}
        style={{background: props.color || 'grey'}}
        className="w-1/5 h-24 cursor-pointer flex justify-center 
        items-center gap-1 rounded-md group hover:rounded-2xl transition-all duration-400">
            <FontAwesomeIcon onClick={addToFavorites} 
            className="text-white hover:text-red-500 opacity-0 
            group-hover:opacity-100 text-xl p-1 transition-all duration-200 
            bg-slate-700 hover:bg-white rounded-md" 
            icon={faHeart} />
            <div className="relative flex items-end">
                <FontAwesomeIcon onClick={toggleCollectionOptions} 
                className="text-white hover:text-black opacity-0 
                group-hover:opacity-100 text-xl p-1 transition-all duration-200 
                bg-slate-700 hover:bg-white rounded-md"
                icon={faListDots} />
                {showCollections && <CollectionsDropdown color={props.color} />}
            </div>    
        </div>
    )
}

export default ColorBox