import Selected from "./Selected/Selected"

function SelectedColors() {
    return (
        <div className="w-1/5 rounded-md bg-slate-200 p-2">
            <div className="mb-2 border-b border-b-gray-700 flex justify-between items-center">
                <p>Selected</p>
                <p>RGB</p>
            </div>
            
            <ul className="max-h-32 flex flex-col gap-2">
                <Selected />
                <Selected />
                <Selected />
            </ul>
        </div>
    )
}

export default SelectedColors