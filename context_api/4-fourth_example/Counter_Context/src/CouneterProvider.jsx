import React from 'react' 

import { useState } from 'react';
import {createContext,useContext} from 'react';

const CounterContext = createContext();

const CouneterProvider = ({children}) => {
    const [count , setCount] = useState(0);
    const incr = () => setCount((c) => c+1)
    const decr = () => setCount((c) => c-1)
  return (
    <CounterContext.Provider value={{count , incr, decr}}>

        {children}
    </CounterContext.Provider>
  )
}
export const useCounter = () => useContext(CounterContext)
export default CouneterProvider