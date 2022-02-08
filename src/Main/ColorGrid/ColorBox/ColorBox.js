import { useDispatch } from "react-redux"
import { colorsActions } from "../../../store/store"

function ColorBox(props) {
    const dispatch = useDispatch()

    function addToSelected() {
        dispatch(colorsActions.addSelectedColor(props.color))
    }

    return (
        <div onClick={addToSelected}
        style={{background: props.color || 'grey'}}
        className="w-1/5 h-24 cursor-pointer rounded-md"></div>
    )
}

export default ColorBox