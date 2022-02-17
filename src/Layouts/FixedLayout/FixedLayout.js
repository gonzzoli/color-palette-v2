import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useRef } from "react"
import { useSelector } from "react-redux"

function rgbToHex(rgbString=''){
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
        try{
            const index = colors.indexOf(rgbToHex(e.target.style.color).toLowerCase())
            if(index===colors.length-1) {
                e.target.style.color = colors[0]
                return
            }
            e.target.style.color = colors[index+1]
        } catch(e) {
            console.log('That can`t change it`s color. Sorry!')
        }
        
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
    <section className="h-screen mdsm:min-h-screen mdsm:h-auto bg-white select-none">
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
            items-center gap-8 mdsm:hidden">
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
            <div
            style={{borderColor: randomStartColor()}}
            onClick={setNextBorderColor}
            className="md:hidden mdsm:block flex justify-center
            items-center border-2 border-black py-1 px-2 rounded-md">
                <FontAwesomeIcon
                style={{color: randomStartColor()}}
                onClick={setNextTextColor}
                className="text-2xl" icon={faBars} />
            </div>
        </header>
        <main
        ref={mainBgRef}
        style={{background: randomStartColor()}}
        className="h-[90vh] px-12 flex gap-4
         mdsm:flex-col mdsm:items-center mdsm:py-10 sm:px-4">
            <div 
            onClick={checkMainClick}
            id='main-left'
            className="w-3/5 flex flex-col justify-center
            mdsm:w-full mdsm:text-center mdsm:items-center">
                <p 
                style={{color: randomStartColor()}}
                onClick={setNextTextColor}
                className="text-6xl mb-6
                font-extrabold max-w-[550px] sm:text-5xl">Solid, bullet-proof, shiny rocks</p>
                <p 
                style={{color: randomStartColor()}}
                onClick={setNextTextColor}
                className="text-2xl mb-10 max-w-[650px]">
                Whether you are a geologist or just have to 
                fill some ground holes, you came to 
                the right place!
                </p>
                <div className="flex pl-12 
                font-bold items-center gap-14 mdsm:gap-28 mdsm:p-0
                sm:gap-5">
                    <div 
                    style={{background: randomStartColor()}}
                    onClick={setNextBgColor}
                    className="py-3 px-8 text-lg rounded-2xl bg-white
                    mdsm:py-4 mdsm:px-10 sm:px-7">
                        <p
                        style={{color: randomStartColor()}}
                        onClick={setNextTextColor}
                        >Buy some</p>
                    </div>
                    <div 
                    style={{borderColor: randomStartColor()}}
                    onClick={setNextBorderColor}
                    className="py-2 px-7 rounded-2xl text-lg
                    border-2 border-black mdsm:py-3 mdsm:px-8 sm:py-2">
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
            className="w-2/5 h-full py-10 flex flex-col gap-6 items-center
            mdsm:w-full mdsm:grid mdsm:grid-cols-4 mdsm:grid-rows-2 mdsm:gap-4 mdsm:pb-0
            mdsm:pt-4 sm:hidden">
                <div 
                style={{background: randomStartColor()}}
                onClick={setNextBgColor}
                className="h-1/6 w-full flex justify-center items-center
                bg-white mdsm:h-full mdsm:col-span-3">
                    <p 
                    style={{color: randomStartColor()}}
                    onClick={setNextTextColor}
                    className="text-4xl font-bold">Diamonds</p>
                </div>
                <div 
                style={{background: randomStartColor()}}
                onClick={setNextBgColor}
                className="h-1/6 w-[80%] rounded-md flex justify-center items-center
                bg-white mdsm:h-full mdsm:col-start-2 mdsm:col-span-2 mdsm:w-full">
                    <p 
                    style={{color: randomStartColor()}}
                    onClick={setNextTextColor}
                    className="text-3xl font-bold">Big rocks</p>
                </div>
                <div 
                style={{background: randomStartColor()}}
                onClick={setNextBgColor}
                className="h-1/6 w-[60%] rounded-2xl flex justify-center items-center
                bg-white mdsm:h-full mdsm:w-full mdsm:col-start-4 mdsm:row-start-1">
                    <p 
                    style={{color: randomStartColor()}}
                    onClick={setNextTextColor}
                    className="text-xl">Pebbles</p>
                </div>
                <div 
                style={{background: randomStartColor()}}
                onClick={setNextBgColor}
                className="h-1/6 w-[40%] rounded-full flex justify-center items-center
                bg-white mdsm:w-full mdsm:h-full mdsm:row-start-2 mdsm:col-start-1">
                    <p
                    style={{color: randomStartColor()}}
                    onClick={setNextTextColor}
                    >Just dirt</p>
                </div>
                <div 
                style={{background: randomStartColor()}}
                onClick={setNextBgColor}
                className="w-[20%] aspect-square rounded-full flex justify-center items-center
                bg-white mx-auto mdsm:w-1/2">
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