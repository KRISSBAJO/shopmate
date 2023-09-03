const {createSlice} = require("@reduxjs/toolkit");

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        catList: [],
        total: 0,
    },
    reducers: {
        add: (state, action) => {
            const updatedCartList  = state.catList.concat(action.payload);
            const total = state.total + action.payload.price;
            return {...state, total: total, catList: updatedCartList};
           
        },
        remove: (state, action) => {
            const updatedCartList = state.catList.filter((item) => item.id !== action.payload.id);
            const total = state.total - action.payload.price;
            return {...state, total: total, catList: updatedCartList};
                             
        }
    }
});



export const { add, remove } = cartSlice.actions;  
export default cartSlice.reducer;


