import React from "react";
import Child from "./Child";

const Parent = props => {
  const ChildList = props.data.child.map(child => (
    <Child
      className="child"
      data={child}
      key={child.key}
      setContentArea={props.setContentArea}
    />
  ));
  return (
    <li className="parent-container">
      <p className="parent-label menu-item">{props.data.label} +</p>
      {ChildList ? <ul>{ChildList}</ul> : <span />}
    </li>
  );
};

export default Parent;
