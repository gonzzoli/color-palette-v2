import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useDispatch, useSelector } from "react-redux"
import { colorsActions } from "../../store/store"

function Buttons() {
    const dispatch = useDispatch()
    const indexShowing = useSelector(state => state.colors.indexShowing)
    const colorsArrayLength = useSelector(state => state.colors.randomized.length)
    //these constants check if whether the last set of colors 
    // or the first set of colors is being shown, for button styling and
    // conditionally dispatching actions

    const isLastColorSet = indexShowing+1===colorsArrayLength
    const isFirstColorSet = indexShowing===0
    function randomizeColors() {
        dispatch(colorsActions.randomizeColors())
    }

    function previousColors() {
        if(isFirstColorSet) return
        dispatch(colorsActions.setPreviousColors())
    }

    function nextColors() {
        if(isLastColorSet) return
        dispatch(colorsActions.setNextColors())
    }

    return (
        <div className="w-[60%] flex gap-4 justify-center 
        items-center mb-5 md:w-full md:col-start-1 md:col-end-3 md:row-start-2
        sm:my-5 sm:order-3 xs:gap-2">
            <button onClick={previousColors}  
            style={{background: isFirstColorSet? 'grey':'#FDE047', cursor: isFirstColorSet? 'default':'pointer', }}
            className="py-2 px-4 rounded-md transition-all 
            flex gap-2 items-center min-w-[180px] 
            justify-center hover:gap-4 ease-out 
            md:min-w-0 md:p-4 md:px-8 md:hover:scale-90
            sm:py-5 sm:px-9 xs:py-4 xs:px-7">
            <FontAwesomeIcon icon={faChevronLeft} className="text-sm" />
                <p className="md:hidden">Previous Colors</p>
            </button>
            <button onClick={randomizeColors} 
            className="py-3 px-5 rounded-md font-bold 
            bg-lime-400 transition-all duration-200
            hover:tracking-wider sm:py-5 sm:px-7 
            xs:py-4 xs:px-6">
                Randomize!
            </button>
            <button onClick={nextColors} 
            style={{background: isLastColorSet? 'grey':'#FDE047', 
            cursor: isLastColorSet? 'default':'pointer'}}
            className="py-2 px-4 rounded-md transition-all flex gap-2 
            items-center justify-center min-w-[170px]
            md:min-w-0 md:py-4 md:px-8 md:hover:scale-90
            hover:gap-4 ease-out
            sm:py-5 sm:px-9 xs:py-4 xs:px-7">
                <p className="md:hidden">Next Colors</p>
                <FontAwesomeIcon icon={faChevronRight} className="text-sm" />
            </button>
        </div>
    )
}

export default Buttons