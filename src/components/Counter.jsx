import PropTypes from 'prop-types'
export default function Counter({DidHomeworks,Homeworks ,completed}    
){
const p=completed?"todo esta completado , genial":"Has completado "+DidHomeworks +" de "+ Homeworks + " Tareas";

return(<>

<p>{p}</p>


</>)

}

Counter.propTypes={
    
    completed:PropTypes.bool,
    DidHomeworks:PropTypes.number,
    Homeworks:PropTypes.number
}