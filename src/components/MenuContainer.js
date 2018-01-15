import React from "react";
import Parent from "./Parent";

const MenuContainer = props => {
    const ParentList = props.data.menuItems.map(parent => (
      <Parent
        className="parent"
        data={parent}
        key={parent.key}
        setContentArea={props.setContentArea}
      />
    ));
  return <ul className="menu-container">{ParentList}</ul>;
};

export default MenuContainer;
