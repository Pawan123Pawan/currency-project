import React from "react";


function Modal({data, cancelModal}) {
  return (
    <div className="modal">
        <div className="cacelModal" onClick={()=>cancelModal(false)}>X</div>
      <div className="modal-name">
        <span>Currency Name:</span> <span>{data.code}</span>
      </div>
      <div className="modal-name">
        <span>Symbol:</span> <span>{data.symbol}</span>
      </div>
      <div className="modal-name">
        <span>Description:</span> <span>{data.description}</span>
      </div>
      <div className="modal-name">
        <span>Rate:</span> <span>{data.rate}</span>
      </div>
      <div className="modal-name">
        <span>Rate Float:</span> <span>{data.rate_float}</span>
      </div>
    </div>
  );
}

export default Modal;
