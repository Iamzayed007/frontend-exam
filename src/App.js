import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
const queryClient = new QueryClient()


import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Home from './components/Home';


function App() {
  return (
    
    // <div className="App">
    //   <h1 className="text-3xl font-bold underline">
    //   Hello world!
    //    </h1>
    
    // </div>
    <QueryClientProvider client={queryClient}>
    <Home/>
  </QueryClientProvider>
   
  );
}

export default App;
