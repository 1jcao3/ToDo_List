/* eslint-disable react/prop-types */
import React from "react";
import Title from "./components/Title";
import Search from "./components/Search";
import List from "./components/List";
import Counter from "./components/Counter";
import Item from "./components/Item";
import ToDoLoading from "./components/ToDoLoading";
import ToDoError from "./components/ToDoError";
import EmptyTodo from "./components/EmptyTodo";
import { ToDoContext } from "./components/ToDoContext/ToDoContext";
import { Modal } from "./components/Modal";
import Button from "./components/Button";
import ToDoForm from "./components/ToDoForm";
// eslint-disable-next-line react/prop-types
export default function AppUI() {
  //
  // loading,error,completedTodos,totalTodos,completed,searchValue,setsearchValue,searching,completing,deleting

  const {
    loading,
    error,
    searching,
    completing,
    deleting,
    openModal,
    setOpenModal,
  } = React.useContext(ToDoContext);

  let classy=false
  if(!loading && searching.length == 0 || error||loading){
  classy=true;
  }
  return (
    <>
      <div className="container">
        <section id="sectionOne">
          <Title />
          <Counter />
          <Search />

          <List classy={classy}>
            <>
              {loading && <ToDoLoading /> }
              {error && <ToDoError />}
              {!loading && searching.length == 0 && <EmptyTodo />}

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
          {openModal && (
            <Modal>
                <ToDoForm />
            </Modal>
          )}
          <Button setOpenModal={setOpenModal}></Button>
       
        
        </section>
      </div>
     
    </>
  );
}
