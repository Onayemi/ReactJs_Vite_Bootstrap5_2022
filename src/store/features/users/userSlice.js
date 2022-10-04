import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoading: false,
    total: 0,
    users: [],
    cartItem: ['pending','success', 'approval'],
};

// export const getCartItems = createAsyncThunk(
//     'cart/getCartItems',
//     async (name, thunkAPI) => {
//       try {
//         // console.log(thunkAPI.getState());
//         // thunkAPI.dispatch(openModal());
//         const resp = await axios(url);
  
//         return resp.data;
//       } catch (error) {
//         return thunkAPI.rejectWithValue('something went wrong');
//       }
//     }
//   );

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser: (state, action) => {
            const itemId = action.payload;
            const resp = state.total + itemId

            return resp;
        },
        clearTotal: (state) => {
            state.total = 0;
        },
        increase: (state) => {
            state.total += 1;
        },
        decrease: (state) => {
            state.total -= 1;
            if(state.total < 0)  state.total = 0; //return clearTotal()
        },
        // increase: (state, { payload }) => {
        //     const cartItem = state.cartItems.find((item) => item.id === payload.id);
        //     cartItem.amount = cartItem.amount + 1;
        // },
    },
    extraReducers: {}
});

export const { clearTotal, addUser, increase, decrease} = userSlice.actions

export default userSlice.reducer;