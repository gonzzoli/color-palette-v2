import ColorGrid from "./ColorGrid/ColorGrid"
import SelectedColors from './SelectedColors/SelectedColors'
import ColorLists from './ColorLists/ColorLists'
import Buttons from './Buttons/Buttons'

function Main() {
    return (
        <main className="mt-5 w-full">
            <div className="flex justify-between
             px-5 h-40 md:grid md:grid-cols-2 md:grid-rows-2
             md:gap-4 md:justify-center md:h-48">
                <SelectedColors />
                <Buttons />
                <ColorLists />
            </div>
            <ColorGrid />
        </main>
    )
}

export default Main