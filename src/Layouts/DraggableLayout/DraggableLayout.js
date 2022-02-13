import { faPencil, faSquareFull } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRef, useState } from 'react'
import DragBox from './DragBox'


function DraggableLayout(props) {
    const [showingElementsOptions, setShowingElementsOptions] = useState(false)
    const [elementsList, setElementsList] = useState([])
    const containerRef = useRef()
    const colors = props.colors

    function toggleElementsOptions() {
        setShowingElementsOptions(prevState => !prevState)
    }

    function insertBox() {
        setElementsList(elementsList.concat(<DragBox key={Math.random()} colors={colors} />))
        setShowingElementsOptions(false)
    }

    return (
        <div className="w-full">
            <div className='flex justify-center items-center relative'>
                <p
                onClick={toggleElementsOptions} 
                className='py-1 px-5 text-green bg-green-300 
                rounded-md text-black cursor-pointer 
                select-none font-extrabold'>+ New Element</p>
                {showingElementsOptions && <ul className='absolute top-10 bg-slate-200
                z-50 w-1/3 max-w-xs rounded-md cursor-pointer overflow-hidden'>
                    <li 
                    onClick={insertBox}
                    className='py-2 px-2 flex gap-2 
                    items-center justify-start 
                    bg-transparent hover:bg-slate-300 transition-all duration-200'>
                        <FontAwesomeIcon className='text-sm' icon={faSquareFull} />
                        New Box</li>
                    <li className='py-2 px-2 flex gap-2 
                    items-center justify-start
                    bg-transparent hover:bg-slate-300 transition-all duration-200'>
                        <FontAwesomeIcon className='text-sm' icon={faPencil} />
                        New Text</li>
                </ul>}
            </div>
            
            <div ref={containerRef}
            className="h-screen bg-white mt-5 relative" >
                {elementsList}
            </div>
        </div>
    )
}

export default DraggableLayout