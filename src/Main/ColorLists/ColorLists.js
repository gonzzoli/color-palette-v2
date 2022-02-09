import FavoritesList from './FavoritesList/FavoritesList'
import CollectionsList from './CollectionsList/CollectionsList'

function ColorLists() {
    return (
        <div className="w-1/5 mx-auto flex flex-col 
        gap-2 md:w-full sm:flex-row xs:flex-col">
            <FavoritesList />
            <CollectionsList />
        </div>
    )
}

export default ColorLists