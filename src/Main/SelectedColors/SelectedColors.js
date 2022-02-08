import { useState } from "react"
import { useSelector } from "react-redux"
import Selected from "./Selected/Selected"



function SelectedColors() {
    let selectedColors = useSelector(state => state.colors.selected)
    const [codeShowing, setCodeShowing] = useState('hex')

    function changeColorCode() {
        setCodeShowing(prevState => {
            return prevState==='hex'?'rgb':'hex'
        })
    }
    return (
        <div className="w-1/5 z-10 rounded-md bg-slate-200 p-2
        h-min">
            <div className="mb-2 border-b select-none border-b-gray-700 flex justify-between items-center">
                <p>Selected</p>
                <p onClick={changeColorCode}
                className="px-2 py-1 mb-1 cursor-pointer transition-all duration-200
                bg-slate-700 text-white rounded-md hover:bg-slate-800
                hover:font-bold" >
                    {codeShowing==='hex'?'RGB':'HEX'}
                </p>
            </div>
            <ul className="h-full scrollbar-thumb-gray-900
            scrollbar-thin flex pr-4 
            flex-col gap-2">
                {selectedColors.length>0? 
                selectedColors.map(color => <Selected key={color} code={codeShowing} color={color} />) : ''}
            </ul>
        </div>
    )
}

export default SelectedColors