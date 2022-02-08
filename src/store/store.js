import { configureStore, createSlice } from "@reduxjs/toolkit";
import randomColor from "randomcolor";

const initialColors = []
for(let i=0; i<16; i++) {
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
            for(let i=0; i<16; i++) {
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
        addSelectedColor(state, action) {
            if(state.selected.includes(action.payload)) return
            state.selected.unshift(action.payload)
        },
        removeSelectedColor(state, action) {
            const index = state.selected.indexOf(action.payload)
            state.selected.splice(index, 1)
        },
        addFavoriteColor(state, action) {
            if(state.favorites.includes(action.payload)) {
                console.log('naoo')
                return
            }
            state.favorites.unshift(action.payload)
        },
        removeFavoriteColor(state, action) {
            const index = state.favorites.indexOf(action.payload)
            state.favorites.splice(index, 1)
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