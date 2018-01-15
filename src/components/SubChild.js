import React from "react";

const SubChild = props => {
  return (
    <li className="subchild-container">
      <p
        className="subchild-label menu-item"
        onClick={() => props.setContentArea(props.data.content)}
      >
        {props.data.label}
      </p>
    </li>
  );
};

export default SubChild;
