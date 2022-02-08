import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


function Buttons() {
    return (
        <div className="w-[60%] flex gap-4 justify-center items-center mb-5">
            <button className="py-2 px-4 rounded-md bg-yellow-300 flex gap-2 items-center min-w-[180px] justify-center">
            <FontAwesomeIcon icon={faChevronLeft} className="text-sm" />
                Previous Colors
            </button>
            <button className="py-3 px-5 rounded-md font-bold bg-lime-400">
                Randomize!
            </button>
            <button className="py-2 px-4 rounded-md bg-yellow-300 flex gap-2 items-center justify-center min-w-[170px]">
                Next Colors
                <FontAwesomeIcon icon={faChevronRight} className="text-sm" />
            </button>
        </div>
    )
}

export default Buttons