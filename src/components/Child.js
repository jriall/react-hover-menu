import React from "react";
import SubChild from "./SubChild";

const Child = props => {
  let SubChildArray;
  //iterate over the subchildren if the child has any.
  if (props.data.child) {
    SubChildArray = props.data.child.map(child => (
      <SubChild
        className="subchild"
        data={child}
        key={child.key}
        setContentArea={props.setContentArea}
      />
    ));
  }
  return (
    <li className="child-container">
      <p
        className="child-label menu-item"
        onClick={() => props.setContentArea(props.data.content)}
      >
        {props.data.label} {props.data.child ? "+" : ""}
      </p>
      {SubChildArray ? <ul>{SubChildArray}</ul> : <span />}
    </li>
  );
};

export default Child;
