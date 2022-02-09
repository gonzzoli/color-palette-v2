import { configureStore, createSlice } from "@reduxjs/toolkit";
import randomColor from "randomcolor";

const initialColors = []
const x = window.innerWidth<=400 ? 12 : 16
for(let i=0; i<x; i++) {
    initialColors.unshift(randomColor())
}

const colorsSlice = createSlice({
    name: 'colors',
    initialState: {
        randomized: [initialColors],
        indexShowing: 0,
        selected: [],
        favorites: [],
        collections: {}
    },
    reducers: {
        randomizeColors(state) {
            const colors = []
            const x = window.innerWidth<=400 ? 12 : 16
            for(let i=0; i<x; i++) {
                colors.unshift(randomColor())
            }
            state.randomized.push(colors)
            state.indexShowing = state.randomized.length-1
        },
        setPreviousColors(state) {
            state.indexShowing--
        },
        setNextColors(state) {
            state.indexShowing++
        },
        addSelectedColor(state, {payload}) {
            if(state.selected.includes(payload)) return
            state.selected.unshift(payload)
        },
        removeSelectedColor(state, {payload}) {
            const index = state.selected.indexOf(payload)
            state.selected.splice(index, 1)
        },
        addFavoriteColor(state, {payload}) {
            if(state.favorites.includes(payload)) return
            state.favorites.unshift(payload)
        },
        removeFavoriteColor(state, {payload}) {
            const index = state.favorites.indexOf(payload)
            state.favorites.splice(index, 1)
        },
        createCollection(state, {payload}) {
            if(state.collections.hasOwnProperty(payload.name)) return
            state.collections[payload.name] = [payload.firstColor]
        },
        addToCollection(state, {payload}) {
            if(state.collections[payload.collection].includes(payload.color)) return
            state.collections[payload.collection].unshift(payload.color)
        },
        removeFromCollection(state, {payload}) {
            const index = state.collections[payload.collection].indexOf(payload.color)
            state.collections[payload.collection].splice(index, 1)
            if(state.collections[payload.collection].length===0) {
                delete state.collections[payload.collection]
            }
        }
    }
})


const store = configureStore({
    reducer: {
        colors: colorsSlice.reducer
    }
})

export const colorsActions = colorsSlice.actions
export default store