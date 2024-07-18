import PropTypes from 'prop-types'
import { ToDoContext } from './ToDoContext/ToDoContext';
import React from 'react'
export default function Counter( ){

    const {completedTodos:DidHomeworks,totalTodos:Homeworks,completed:completed}=React.useContext(ToDoContext);
const p=completed&&Homeworks==0?"todo esta completado , genial":"Has completado "+DidHomeworks +" de "+ Homeworks + " Tareas";

return(<>
<div className="container-c">

<p>{p}</p>

</div>


</>)

}

Counter.propTypes={
    
    completed:PropTypes.bool,
    DidHomeworks:PropTypes.number,
    Homeworks:PropTypes.number
}