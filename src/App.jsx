import React from "react";
import Title from "./components/Title";
import Search from "./components/Search";
import List from "./components/List";
import Counter from "./components/Counter";
import Item from "./components/Item";
import './Styles/General.css';
import './Styles/App.css';
import './Styles/Items.css';


function useLocalStorage(itemName,initialValue){



  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;

  if (!localStorageItem) {
    parsedItem = initialValue;
    localStorage.setItem(itemName, JSON.stringify([]));
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item,setItem]=React.useState(parsedItem) 
  const saveItem = (newItem) => {
    localStorage.setItem("ToDo_v1", JSON.stringify(newItem));
    setItem(newItem);
  };

  return[item,saveItem]
}


export default function App() {


  const [completed, setCompleted] = React.useState(false);
  const [searchValue, setsearchValue] = React.useState('');
  const [todos, saveTodos] = useLocalStorage('ToDos_v1',[])

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

  return (
    <>
      <div className="container">
        <section id="sectionOne">
          <Title />
          <Counter DidHomeworks={completedTodos} Homeworks={totalTodos} completed={completed} />
          <Search searchValue={searchValue} setsearchValue={setsearchValue} />
        </section>
        <section id="sectionTwo">
          <List>
            <>
              {searching.map((todo) => (
                <Item
                  key={todo.text}
                  text={todo.text}
                  completed={todo.completed}
                  onCompleted={() => completing(todo.text)}
                  onDelete={() => deleting(todo.text)}
                />
              ))}
            </>
          </List>
        </section>
      </div>
    </>
  );
}
