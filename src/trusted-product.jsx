import React from "react";

function TrustedProduct({ comments }) {
  return (
      comments && (comments.length >= 5) && <p style={{color: "green"}}>Проверенный товар</p>
  );
}

export default TrustedProduct;
