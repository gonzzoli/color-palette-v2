import ColorBox from "./ColorBox/ColorBox"
import randomColor from "randomcolor"

function ColorGrid() {
    const colors = []

    for(let i=0; i<16; i++) {
        colors.push(randomColor())
    }

    return (
        <div className="p-5 flex justify-center flex-wrap w-screen gap-3">
            {colors.map(color => <ColorBox key={color} color={color} />)}
        </div>
    )
}

export default ColorGrid