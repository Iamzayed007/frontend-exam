import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
const initialState = {
  allData:   [],
  status: 'idle',
  error: null
}
export const fetchData = createAsyncThunk(
    'posts',
    async (url) => {
      const response = await axios.get(url);
 
      return response.data;
    }
  );
export const postsSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    getAllData: (state,action) => {
    
    state.allData=action.payload

    },
    deleteData: (state,action) => {
      const itemId = action.payload;
   
      state.allData = state.allData.filter(item => item.id !== itemId);
  
    },
    addPost: (state, action) => {
      const newItem = action.payload;
      state.allData = [...state.allData, newItem];
    },
    editPost: (state, action) => {
      const  updateData  = action.payload;

      const index = state.allData.findIndex(item => item.id === updateData.id);
 
      if (index !== -1) {
        state.allData[index] = updateData
     
      }
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchData.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = 'succeeded'

        state.allData = action.payload
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})

export const { getAllData, deleteData, addPost ,editPost} = postsSlice.actions

export default postsSlice.reducer