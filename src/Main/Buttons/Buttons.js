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
        <div className="w-[60%] flex gap-4 justify-center items-center mb-5">
            <button onClick={previousColors}  
            style={{background: isFirstColorSet? 'grey':'#FDE047', cursor: isFirstColorSet? 'default':'pointer', }}
            className="py-2 px-4 rounded-md transition-all flex gap-2 items-center min-w-[180px] justify-center">
            <FontAwesomeIcon icon={faChevronLeft} className="text-sm" />
                Previous Colors
            </button>
            <button onClick={randomizeColors} className="py-3 px-5 rounded-md font-bold bg-lime-400">
                Randomize!
            </button>
            <button onClick={nextColors} 
            style={{background: isLastColorSet? 'grey':'#FDE047', cursor: isLastColorSet? 'default':'pointer'}}
            className="py-2 px-4 rounded-md transition-all flex gap-2 items-center justify-center min-w-[170px]">
                Next Colors
                <FontAwesomeIcon icon={faChevronRight} className="text-sm" />
            </button>
        </div>
    )
}

export default Buttons