import {configureStore} from "@reduxjs/toolkit"
import userSlice from "./userSlice"
import movieSlice from "./movieSlice"
import gptSearchSlice from "./gptSearchSlice"
import configSlice from "./configSlice"
import overviewSlice from "./overviewSlice"

const appStore=configureStore({
    reducer:{
        user:userSlice,
        movie:movieSlice,
        gpt:gptSearchSlice,
        config:configSlice,
        overview:overviewSlice
    }
})

export default appStore