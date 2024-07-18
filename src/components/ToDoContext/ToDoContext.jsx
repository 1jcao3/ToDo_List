/* eslint-disable react/prop-types */
import React from 'react'
import useLocalStorage from '../customHooks/useLocalSorage';
const ToDoContext =React.createContext()

function ToDoProvider({children}){

  
  const [openModal,setOpenModal]= React.useState(false)
  const [completed, setCompleted] = React.useState(false);
  const [searchValue, setsearchValue] = React.useState('');
  const {item:todos, saveItem:saveTodos,loading,error} = useLocalStorage('ToDos_v1',[])

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  // Use useEffect to update the `completed` state
  React.useEffect(() => {
    if (completedTodos === 0) {
      setCompleted(true);
    } else {
      setCompleted(false);
    }
  }, [completedTodos]);

  const searching = todos.filter((todo) => {
    return todo.text.toLowerCase().includes(searchValue.toLowerCase());
  });



  const completing = (text) => {
    const newToDos = [...todos];
    const index = newToDos.findIndex((todo) => todo.text === text);

    newToDos[index].completed = !newToDos[index].completed;
    saveTodos(newToDos);
  };

  const deleting = (text) => {
    const newToDos = [...todos];
    const index = newToDos.findIndex((todo) => todo.text === text);

    newToDos.splice(index, 1);
    saveTodos(newToDos);
  };

  const addHomework=(text)=>{
    const newToDos = [...todos];
  newToDos.push({text,
    completed:false,


  })

 
    saveTodos(newToDos);
  }

return(

<>
<ToDoContext.Provider value={{

addHomework,loading,error,completedTodos,totalTodos,completed,searchValue,setsearchValue,searching,completing,deleting,openModal,setOpenModal
}}>

{children}
</ToDoContext.Provider>
</>

)

}



export {ToDoContext,ToDoProvider};