import { useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { colorsActions } from "../../../../store/store"
import CollectionLogo from "../../../ColorLists/CollectionsList/CollectionLogo"


function CollectionsDropdown(props) {
    const [isCreatingCollection, setIsCreatingCollection] = useState(false)
    const inputRef = useRef()
    const collections = useSelector(state => state.colors.collections)
    const dispatch = useDispatch()
    let collectionNames = []

    for(const key in collections) {
        collectionNames.push(key)
    }

    function showCollectionForm(e) {
        e.stopPropagation()
        setIsCreatingCollection(true)
    }

    function createCollection(e) {
        e.preventDefault()
        if(inputRef.current.value.length === 0) return
        dispatch(colorsActions.createCollection({name: inputRef.current.value, firstColor: props.color}))
        setIsCreatingCollection(false)
    }

    function addToCollection(collection) {
        dispatch(colorsActions.addToCollection({collection, color: props.color}))
    }

    return (
    <div className="absolute shadow-md shadow-slate-500 z-10 top-8 bg-white rounded-md">
        {!isCreatingCollection ?
        <ul>
            <li onClick={showCollectionForm} className="p-2 transition-all duration-200 
                whitespace-nowrap hover:bg-slate-300 rounded-md text-pink-700">
                + Create new collection
            </li> 
            {collectionNames.map(collection => {
            return (
            <li onClick={() => {addToCollection(collection)}}
            key={collection}
            className="cursor-pointer hover:bg-slate-300 
            transition-all rounded-md duration-200 p-2 flex h-full gap-2">
                <CollectionLogo collection={collection} />
                {collection}
            </li>)})
            }
        </ul>
        :
        <form onSubmit={createCollection}
        className="p-2 flex flex-col cursor-default gap-2 justify-start items-start" >
            <label className="font-bold">Collection Name
                <input ref={inputRef} type="text" className="outline-none border-b-2 
                border-b-stone-600 focus:border-blue-400 transition-all text-sm" />
            </label>
            <button type="submit" className="py-1 px-3
             bg-pink-700 hover:bg-pink-500 transition-all duration-200 text-white cursor-pointer rounded-md">
                Create
            </button>
        </form>
        }
    </div>)
}

export default CollectionsDropdown