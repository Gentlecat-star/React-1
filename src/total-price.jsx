import React from "react";
import Price from "./price";
import OldPrice from "./old-price";

function TotalPrice({ price, oldPrice }) {
    const totalPrice = oldPrice && (oldPrice > 0) && (oldPrice > price) ?
        <OldPrice oldPrice={oldPrice} /> : "";
    return (
        <p>
            Цена: {totalPrice} <Price price={price} />
        </p>
    )
}

export default TotalPrice;