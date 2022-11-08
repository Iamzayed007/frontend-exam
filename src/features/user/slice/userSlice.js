import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


  
const initialState = {
    users: [],
    status: 'idle'
};

const data = fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => json);

export const incrementAsync = createAsyncThunk(
    'usera',
    async () => {       
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        response = response.json();
        return response.data;
    }
);

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        userList: (state) => {
            state.users = data
        },
    },

    extraReducers: (builder) => {
        builder
          .addCase(incrementAsync.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(incrementAsync.fulfilled, (state, action) => {
            state.status = 'idle';
            state.users = action.payload;
          });
      },
});

export const { userList } = userSlice.actions;


export default userSlice.reducer;
