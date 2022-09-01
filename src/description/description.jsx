import React from "react";

function Description({ description }) {
  return (
    <React.Fragment>
      <h2>Описание</h2>
      {description}
    </React.Fragment>
  );
}

export default Description;
