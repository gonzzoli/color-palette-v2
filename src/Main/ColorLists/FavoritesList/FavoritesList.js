import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import Favorite from "./Favorite"

function FavoritesList() {
    const [isOpen, setIsOpen] = useState(false)
    const colors = useSelector(state => state.colors.favorites)

    function toggleList() {
        setIsOpen(prevState => !prevState)
    }

    useEffect(() => {
        function checkBlur(e) {
            //checks id, and every child here has that id
            if(e.target.id==='favorites') return
            setIsOpen(false)
        }
        window.addEventListener('click', checkBlur)
        return () => {
            window.removeEventListener('click', checkBlur)
        }
    }, [isOpen])

    return (
        <div className="z-20 py-2 w-full select-none relative">
            <div id="favorites" onClick={toggleList} className="px-2 cursor-pointer flex justify-between items-center">
                <p id="favorites">Favorites</p>
                <FontAwesomeIcon id="favorites" style={{transform: isOpen?`rotate(180deg)`:''}} 
                className="text-sm transition-all" icon={faChevronDown} />
            </div>
            {isOpen && <ul id="favorites"
            className="rounded-md flex flex-col 
            bg-slate-300 w-full
            absolute">
                {colors.map(color => <Favorite key={color} color={color} />)}
            </ul>}
        </div>
    )
}

export default FavoritesList