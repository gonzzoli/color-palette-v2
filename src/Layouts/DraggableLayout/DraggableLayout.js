import { useRef } from 'react'
import DragBox from './DragBox'


function DraggableLayout(props) {
    const containerRef = useRef()
    const colors = props.colors
    console.log(colors)
    return (
        <div className="w-full">
            <div className='flex justify-center items-center'>
                <p className='py-1 px-5 text-green bg-green-300 
                inline-block rounded-md text-black cursor-pointer 
                select-none font-extrabold'>+ New Element</p>
            </div>
            
            <div ref={containerRef}
            className="h-screen bg-white mt-5 relative" >
                <DragBox colors={colors} />
                <DragBox colors={colors} />
                <DragBox colors={colors} />
            </div>
        </div>
    )
}

export default DraggableLayout