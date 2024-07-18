import "../Styles/General.css"
import "../Styles/Buttons.css"
import "../Styles/Inputs.css"
import "../Styles/Form.css"
import React from "react"
import { ToDoContext } from "./ToDoContext/ToDoContext"
export default function ToDoForm(){


const{addHomework,setOpenModal}=React.useContext(ToDoContext)
const [newHomework,setNewHomework]=React.useState('');

const onSubmit =(event)=>{

    event.preventDefault();
    setOpenModal(false);
    addHomework(newHomework);
}
const onCancel =()=>{


    setOpenModal(false);
}
   
const onChange =(event)=>{

setNewHomework(event.target.value)
}
return(



   <>
   
<form onSubmit={onSubmit}>

    <label id="newTodo">Escribe tu nuevo To-Do</label>
    
    <textarea placeholder="Hacer algo" value={newHomework} onChange={onChange}></textarea>

<div className="ButtonContainer">
    <button  onClick={onCancel}className="FormButton FormButtonCancel">Cancelar</button>
    <button value={newHomework} onClick={onChange}className="FormButton FormButonAdd" type="submit">Añadir</button>
    </div>

</form>

   </> 
)


}