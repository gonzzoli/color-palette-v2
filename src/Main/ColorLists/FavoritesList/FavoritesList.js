import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


function FavoritesList() {
    return (
        <div className="p-2 select-none flex justify-between items-center">
            <p>Favorites</p>
            <FontAwesomeIcon className="text-sm" icon={faChevronDown} />
        </div>
    )
}

export default FavoritesList