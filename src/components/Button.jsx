import '../Styles/Buttons.css'
// eslint-disable-next-line react/prop-types
export default function Button( {setOpenModal}){



return (

    <>
    
    <span className='containerAddButton'><button id="addButton" onClick={()=>{
        setOpenModal(state=>!state)
console.log("boton");

    }}>+</button></span>
    </>
)

}

