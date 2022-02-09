import ColorBox from "./ColorBox/ColorBox"
import { useSelector } from "react-redux"

function ColorGrid() {
    const indexShowing = useSelector(state => state.colors.indexShowing)
    const colors = useSelector(state => state.colors.randomized[indexShowing])

    return (
        <div className="py-5 md:pt-2 flex justify-center flex-wrap
         w-full gap-3 mx-auto">
            {colors.map(color => <ColorBox key={color} color={color} />)}
        </div>
    )
}

export default ColorGrid