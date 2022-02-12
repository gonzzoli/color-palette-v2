import { useSelector } from "react-redux"
import DraggableLayout from "./DraggableLayout/DraggableLayout"


function Layouts() {
    const colors = useSelector(state => state.colors.selected)
    return (
        <section className="w-full mt-12">
            <div className="text-center text-white">
                <h1 className="text-3xl mb-5">
                    Try your colors
                </h1>
                <p className="mb-7">Create your layout from scratch here by creating, 
                dragging and resizing elements, or use some pre-made layouts further down.</p>
            </div>
            <div>
                <DraggableLayout colors={colors} />
            </div>
        </section>
    )
}

export default Layouts