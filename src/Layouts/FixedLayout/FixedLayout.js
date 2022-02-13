import { useRef } from "react"
import { useSelector } from "react-redux"

function rgbToHex(rgbString=''){
    console.log(rgbString)
    rgbString = rgbString.match(/\(([^)]+)\)/)[1].split(',')
    let hexString = ''
    function rgbNumToHex(num){
        let string = ''
        let aux = Math.floor(num/16)
        let remainder = num%16
        switch (aux) {
            case 10:
                string += 'A'
                break;
            case 11:
                string += 'B'
                break;
            case 12:
                string += 'C'
                break;
            case 13:
                string += 'D'
                break;
            case 14:
                string += 'E'
                break;
            case 15:
                string += 'F'
                break;
            default:
                string += aux
                break;
        }
        switch (remainder) {
            case 10:
                string += 'A'
                break;
            case 11:
                string += 'B'
                break;
            case 12:
                string += 'C'
                break;
            case 13:
                string += 'D'
                break;
            case 14:
                string += 'E'
                break;
            case 15:
                string += 'F'
                break;
            default:
                string += remainder
                break;
        }
        return string
    }
    rgbString.forEach(value => {
        hexString += rgbNumToHex(Number(value.trim()))
    })
    return '#' + hexString
}


function FixedLayout() {
    const colors = useSelector(state => state.colors.selected)
    const mainBgRef = useRef()

    function setNextBgColor(e) {
        e.stopPropagation()
        const index = colors.indexOf(rgbToHex(e.target.style.background).toLowerCase())
        if(index===colors.length-1) {
            e.target.style.background = colors[0]
            return
        }
        e.target.style.background = colors[index+1]
    }

    function setNextTextColor(e) {
        e.stopPropagation()
        const index = colors.indexOf(rgbToHex(e.target.style.color).toLowerCase())
        if(index===colors.length-1) {
            e.target.style.color = colors[0]
            return
        }
        e.target.style.color = colors[index+1]
    }

    function setNextBorderColor(e) {
        e.stopPropagation()
        const index = colors.indexOf(rgbToHex(e.target.style.borderColor).toLowerCase())
        if(index===colors.length-1) {
            e.target.style.borderColor = colors[0]
            return
        }
        e.target.style.borderColor = colors[index+1]
    }

    function checkMainClick(e) {
        const id = e.target.id
        if(id!=='') changeMainBgColor()
    }

    function changeMainBgColor() {
        const index = colors.indexOf(rgbToHex(mainBgRef.current.style.background).toLowerCase())
        if(index===colors.length-1) {
            mainBgRef.current.style.background = colors[0]
            return
        }
        mainBgRef.current.style.background = colors[index+1]
    }

    function randomStartColor() {
        const randIndex = (Math.floor(Math.random()*50)) % colors.length
        return colors[randIndex]
    }

    return (
    <section className="h-screen bg-white select-none">
        <header
        style={{background: randomStartColor()}}
        onClick={setNextBgColor}
        className="bg-black h-[10vh] flex justify-between 
        items-center text-white px-5">
            <div className="text-2xl font-bold tracking-wider">
                <span
                style={{color: randomStartColor()}}
                onClick={setNextTextColor}
                >Rock</span> <span
                style={{color: randomStartColor()}}
                onClick={setNextTextColor}
                >Store</span>
            </div>
            <nav className="flex justify-end 
            items-center gap-8">
                <div 
                style={{background: randomStartColor()}}
                onClick={setNextBgColor}
                className="py-1 px-3 bg-pink-500 rounded-md">
                    <p 
                    style={{color: randomStartColor()}}
                    onClick={setNextTextColor}
                    >Home</p>
                </div>
                <p
                style={{color: randomStartColor()}}
                onClick={setNextTextColor}
                >Products</p>
                <p
                style={{color: randomStartColor()}}
                onClick={setNextTextColor}
                >Maps</p>
                <div 
                style={{borderColor: randomStartColor()}}
                onClick={setNextBorderColor}
                className="p-1 px-3 border-2 border-white 
                rounded-3xl">
                    <p
                    style={{color: randomStartColor()}}
                    onClick={setNextTextColor}
                    >Cart</p>
                </div>
            </nav>
        </header>
        <main
        ref={mainBgRef}
        style={{background: randomStartColor()}}
        className="h-[90vh] px-12 flex gap-4">
            <div 
            onClick={checkMainClick}
            id='main-left'
            className="w-3/5 flex flex-col justify-center">
                <p 
                style={{color: randomStartColor()}}
                onClick={setNextTextColor}
                className="text-6xl mb-6
                font-extrabold max-w-[550px]">Solid, bullet-proof, shiny rocks</p>
                <p 
                style={{color: randomStartColor()}}
                onClick={setNextTextColor}
                className="text-2xl mb-10 max-w-[650px]">
                Whether you are a geologist or just have to 
                fill some ground holes, you came to 
                the right place!
                </p>
                <div className="flex pl-12 
                font-bold items-center gap-14 ">
                    <div 
                    style={{background: randomStartColor()}}
                    onClick={setNextBgColor}
                    className="py-3 px-8 rounded-2xl bg-white">
                        <p
                        style={{color: randomStartColor()}}
                        onClick={setNextTextColor}
                        >Buy some</p>
                    </div>
                    <div 
                    style={{borderColor: randomStartColor()}}
                    onClick={setNextBorderColor}
                    className="py-2 px-7 rounded-2xl
                    border-2 border-black">
                        <p
                        style={{color: randomStartColor()}}
                        onClick={setNextTextColor}
                        >Explore</p>
                    </div>
                </div>
            </div>
            <div 
            onClick={checkMainClick}
            id='main-right'
            className="w-2/5 py-10 flex flex-col gap-6 items-center">
                <div 
                style={{background: randomStartColor()}}
                onClick={setNextBgColor}
                className="h-1/6 w-full flex justify-center items-center
                bg-white">
                    <p 
                    style={{color: randomStartColor()}}
                    onClick={setNextTextColor}
                    className="text-4xl font-bold">Diamonds</p>
                </div>
                <div 
                style={{background: randomStartColor()}}
                onClick={setNextBgColor}
                className="h-1/6 w-[80%] rounded-md flex justify-center items-center
                bg-white">
                    <p 
                    style={{color: randomStartColor()}}
                    onClick={setNextTextColor}
                    className="text-3xl font-bold">Big rocks</p>
                </div>
                <div 
                style={{background: randomStartColor()}}
                onClick={setNextBgColor}
                className="h-1/6 w-[60%] rounded-2xl flex justify-center items-center
                bg-white">
                    <p 
                    style={{color: randomStartColor()}}
                    onClick={setNextTextColor}
                    className="text-xl">Pebbles</p>
                </div>
                <div 
                style={{background: randomStartColor()}}
                onClick={setNextBgColor}
                className="h-1/6 w-[40%] rounded-full flex justify-center items-center
                bg-white">
                    <p
                    style={{color: randomStartColor()}}
                    onClick={setNextTextColor}
                    >Just dirt</p>
                </div>
                <div 
                style={{background: randomStartColor()}}
                onClick={setNextBgColor}
                className="w-[20%] aspect-square rounded-full flex justify-center items-center
                bg-white">
                    <p 
                    style={{color: randomStartColor()}}
                    onClick={setNextTextColor}
                    className="text-sm">Sand</p>
                </div>
            </div>
        </main>
    </section>
    )
}

export default FixedLayout