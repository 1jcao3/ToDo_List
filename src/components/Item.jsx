import "../Styles/Inputs.css";
import "../Styles/Items.css";
import "../Styles/Buttons.css"
import PropTypes from "prop-types";
import { MdDelete } from "react-icons/md";
import { CiCircleCheck } from "react-icons/ci";
export default function Item({ text, completed ,onCompleted,onDelete}) {
  

   

    const styles=completed?{textDecoration:'line-through'}:{};

  return (
    <>
      <li>
        <span style={styles}>
         
<span onClick={onCompleted}
id="check">

          <CiCircleCheck className="check" 
          />
          </span>
          {text}
        </span>
        
        <span id="delete" onClick={onDelete}><MdDelete></MdDelete></span>
      </li>
    </>
  );
}

Item.propTypes = {
  text: PropTypes.string,
  completed: PropTypes.bool,
  onCompleted: PropTypes.func,
  onDelete: PropTypes.func
};
