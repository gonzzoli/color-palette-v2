import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import CollectionLogo from "./CollectionLogo"
import CollectionColor from './CollectionColor'
import { useSelector } from "react-redux"

function CollectionItem(props) {
    const [isOpen, setIsOpen] = useState(false)
    const collectionColors = useSelector(state => state.colors.collections[props.collection])

    function toggleCollection() {
        setIsOpen(prevState => !prevState)
    }

    return (
        <li
        id="collections"
        className="cursor-pointer hover:bg-slate-100 
        transition-all first:rounded-t-md duration-200
        flex flex-col">
            <div onClick={toggleCollection} id="collections" className="p-2 flex justify-between items-center">
                <div id="collections" className="flex h-full gap-2" >
                    <CollectionLogo collection={props.collection} />
                    {props.collection}
                </div>
                <FontAwesomeIcon id="collections" style={{transform: isOpen?'rotate(180deg)':''}} 
                className="text-sm transition-all duration-200" icon={faChevronDown} />
            </div>
            {isOpen && 
            <ul className="rounded-b-md overflow-hidden">
                {collectionColors.map(color => <CollectionColor collection={props.collection} key={color} color={color} />)}
            </ul>}
        </li>
    )
}

export default CollectionItem