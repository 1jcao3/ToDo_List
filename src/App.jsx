import React from "react";
import AppUI from "./AppUI";
import './Styles/General.css';
import './Styles/App.css';
import './Styles/Items.css';
import useLocalStorage from "./components/customHooks/useLocalSorage";




export default function App() {


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

 return(
<AppUI loading={loading} error={error}completedTodos={completedTodos}totalTodos={totalTodos}completed={completed} searchValue={searchValue} 
setsearchValue={setsearchValue} searching={searching} completing={completing} deleting={deleting}> 

</AppUI>

 )
}
