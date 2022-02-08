import ColorGrid from "./ColorGrid/ColorGrid"
import SelectedColors from './SelectedColors/SelectedColors'
import ColorLists from './ColorLists/ColorLists'
import Buttons from './Buttons/Buttons'

function Main() {
    return (
        <main className="mt-5">
            <div className="flex justify-between px-5">
                <SelectedColors />
                <Buttons />
                <ColorLists />
            </div>
            <ColorGrid />
        </main>
    )
}

export default Main