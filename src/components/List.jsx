
import "../Styles/Buttons.css"

import PropTypes from "prop-types"
export default function List({children,classy}) {

  return (
    <>
    <div className={classy ?'empty':'list-c'}>
      <ul className={'listItem'}>
       
{children}
      </ul>
      </div>
    </>
  );
}

List.propTypes={


  children:PropTypes.element,
  classy:PropTypes.bool
}

