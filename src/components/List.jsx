
import "../Styles/Buttons.css"

import PropTypes from "prop-types"
export default function List({children}) {

  return (
    <>
      <ul className="listItem">
       
{children}
      </ul>
    </>
  );
}

List.propTypes={


  children:PropTypes.element
}

