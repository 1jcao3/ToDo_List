import "../Styles/Inputs.css"
import PropTypes from 'prop-types'
export default function Search({searchValue,setsearchValue}){


return(


    <>
    
    <input type="text" placeholder="search" id="search" value={searchValue} onChange={(event)=>{

setsearchValue(event.target.value)

    }} ></input>
    
    </>
)

}

Search.propTypes={

    searchValue:PropTypes.string,
    setsearchValue:PropTypes.func
}