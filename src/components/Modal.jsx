import "../Styles/General.css";

import ReactDOM from 'react-dom';

export default function Modal({children}) {
  return ReactDOM.createPortal(
    (
      <div className="modal-container">
        {children}
      </div>
    ),
    document.getElementById('modales')
  );
}

export {Modal}