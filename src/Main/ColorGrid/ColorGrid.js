import ColorBox from "./ColorBox/ColorBox"
import { useSelector } from "react-redux"
function ColorGrid() {
    const indexShowing = useSelector(state => state.colors.indexShowing)
    const colors = useSelector(state => state.colors.randomized[indexShowing])
    let rows = [colors.slice(0,4),colors.slice(4,8), colors.slice(8,12),colors.slice(12,16)]
    
    if(window.innerWidth<=400) {
        rows = [colors.slice(0,3),colors.slice(3,6), colors.slice(6,9),colors.slice(9,12)]
    }
    
    return (
        <div className="py-5 md:pt-2 flex 
        justify-center flex-col
        w-full gap-3 mx-auto">
            {rows.map((row, index) => {
                return (
                <div key={index} className="w-full flex gap-3 
                justify-center items-center">
                   {row.map((color, index) => <ColorBox key={color} position={index} color={color} />)}
                </div>)
            })}
             
        </div>
        // <div className="py-5 md:pt-2 flex 
        // justify-center flex-wrap
        //  w-full gap-3 mx-auto">
        //     {colors.map(color => <ColorBox key={color} color={color} />)}
        // </div>
    )
}

export default ColorGrid