import { createSlice } from "@reduxjs/toolkit"

export const counterSlice = createSlice({

    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        increment: (state, actions) => {

            state.value += actions.payload
        },
        dec(s, a) {
            if (!s.value <= 0) {
                s.value -= a.payload
            }
        },
    },
})

export const { increment, dec } = counterSlice.actions

export default counterSlice.reducer