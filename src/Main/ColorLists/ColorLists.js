import FavoritesList from './FavoritesList/FavoritesList'
import CollectionsList from './CollectionsList/CollectionsList'

function ColorLists() {
    return (
        <div className="w-1/5 mx-auto rounded-md bg-slate-200">
            <FavoritesList />
            <CollectionsList />
        </div>
    )
}

export default ColorLists