import "./modal.css";
import React from "react";

export const Modal = (props) => {
  return (
    <div id="myModal" className="updateModal">
      <div className="modal-content">
        <div className="modal-header">
          <span className="close" onClick={props.closePopup}>
            &times;
          </span>
          <h4>{props.title}</h4>
        </div>
        <div className="modal-body">{props.children}</div>
      </div>
    </div>
  );
};
