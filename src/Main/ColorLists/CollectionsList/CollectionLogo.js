import { useSelector } from "react-redux"


function CollectionLogo(props) {
    
    let colors = useSelector(state => state.colors.collections[props.collection]).slice()

    while(colors.length<4) {
        colors.push('#ffffff0')
    }

    return (
        <div id="collections"
        className="grid grid-cols-2 grid-rows-2 w-8 rounded-md overflow-hidden" >
            {colors.map(color => <div key={Math.random()} id="collections" className="w-full h-full 
            " style={{background: color}}></div>)}
        </div>
    )
}

export default CollectionLogo