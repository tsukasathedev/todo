import React from 'react';
import { useState } from 'react'

const useTodos = () => {

    const [inputValue, setInputValue] = useState('')
    const [todos, setTodos] = useState(["Make my first task !"]);
  
    const handleChange = (e) => {
      setInputValue(e.target.value);
    };
  
    const AddHandleTodos = () => {
      if (inputValue.trim() !== '') {
        setTodos([...todos , inputValue])
      }
    }
    
  
    const DeleteHandleTodos = (index) => {
      const updatedTodos = todos.filter((_ , i) => i !== index)
      setTodos(updatedTodos)
    }

    const ModifyTask = (index, newValue) => {
      const updatedTaches = [...todos];
      updatedTaches[index] = newValue;
      setTodos(updatedTaches);
    };
  
  

    return {
        TodoValue : inputValue,
        taches : todos ,
        AddTasks : AddHandleTodos,
        DeleteTasks : DeleteHandleTodos,
        ChangeValue : handleChange,
        ModifyTask : ModifyTask
    }
};

export default useTodos;