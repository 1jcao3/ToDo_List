/* eslint-disable react/prop-types */
import Title from "./components/Title";
import Search from "./components/Search";
import List from "./components/List";
import Counter from "./components/Counter";
import Item from "./components/Item";

// eslint-disable-next-line react/prop-types
export default function AppUI({loading,error,completedTodos,totalTodos,completed,searchValue,setsearchValue,searching,completing,deleting}){


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

                {loading&&<p>cargando</p>}
              {error && <p>Huno un error</p>}
              {(!loading && searching.length==0 )&&<p>Crear tu primer ToDo!</p>}


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
      )
}