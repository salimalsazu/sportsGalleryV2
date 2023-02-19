import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {
    search: [],
    isLoading: false,
    isError: false,
    error: ''
}



export const getSearch = createAsyncThunk("search/getSearch",
    async (search) => {
        const res = await fetch(`http://localhost:5000/products?search=${search}`)
        const data = await res.json()
        return data.product;
    }
)



const searchSlice = createSlice({
    name: "search",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getSearch.pending, (state, action) => {
                state.isLoading = true,
                    state.isError = false
            })
            .addCase(getSearch.fulfilled, (state, action) => {
                state.isLoading = false,
                    state.search = action.payload;
            })
            .addCase(getSearch.rejected, (state, action) => {
                state.search = [],
                    state.isLoading = false,
                    state.isError = true,
                    state.error = action.error.message

            })

    }
})

export default searchSlice.reducer;