import { useSelector } from "react-redux"
import DraggableLayout from "./DraggableLayout/DraggableLayout"
import FixedLayout from "./FixedLayout/FixedLayout"


function Layouts() {
    return (
        <section className="w-full mt-12">
            <div className="text-center text-white">
                <h1 className="text-3xl mb-5">
                    Try your colors <span className="text-lg">(working on it currently)</span>
                </h1>
                <p className="mb-7">Create your layout from scratch here by adding, 
                dragging and resizing elements, or use a pre-made layout further down.</p>
            </div>
            <div>
                <DraggableLayout />
                <FixedLayout />
            </div>
        </section>
    )
}

export default Layouts