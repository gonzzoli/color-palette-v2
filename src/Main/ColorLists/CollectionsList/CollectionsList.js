import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"

function CollectionsList() {
    return (
        <div className="p-2 pt-0 select-none flex justify-between items-center">
            <p>Collections</p>
            <FontAwesomeIcon className="text-sm" icon={faChevronDown} />
        </div>
    )
}

export default CollectionsList