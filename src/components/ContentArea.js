import React from "react";

const ContentArea = props => {
  return (
    <div className="content-area">
      <p className="content-area-text">{props.text}</p>
    </div>
  );
};

export default ContentArea;
