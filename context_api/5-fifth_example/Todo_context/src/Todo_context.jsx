import React from 'react'
import { useState } from 'react';
import { createContext, useContext } from 'react'
const TodoContext = createContext();

const Todo_context = ({children}) => {
    const [todo,settodo] = useState([]);
    const addtodo = (task) => settodo((prev) => [...prev,task]);
    const removetodo = (index) => settodo((prev) =>prev.filter((_,i) => i !== index));
  return (
   <TodoContext.Provider value={{todo,addtodo,removetodo}}>
{children}
   </TodoContext.Provider>
  )
}
export const UseTodoContext = () => useContext(TodoContext)
export default Todo_context