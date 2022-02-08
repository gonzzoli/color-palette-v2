import { faTimes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


function Selected() {
    return (
        <li className="w-full flex gap-2 justify-start items-center">
            <div className="w-7 h-7 rounded-md cursor-pointer bg-slate-300"></div>
            <p>#31773</p>
            <FontAwesomeIcon className="cursor-pointer ml-auto" icon={faTimes} />
        </li>
    )
}

export default Selected