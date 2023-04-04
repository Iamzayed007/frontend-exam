import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import postsReducer from '../features/counter/postsSlice';

const persistedState = localStorage.getItem('reduxState') 
                       ? JSON.parse(localStorage.getItem('reduxState'))
                       : {}
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    post: postsReducer,
  },
  persistedState
});

store.subscribe(()=>{
  localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})
