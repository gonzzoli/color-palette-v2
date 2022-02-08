

function ColorBox(props) {
    return (
        <div style={{background: props.color || 'grey'}}
        className="w-1/5 h-24 cursor-pointer rounded-md"></div>
    )
}

export default ColorBox