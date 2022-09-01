import React from "react";
import Price from "/src/price/price";
import OldPrice from "/src/old-price/old-price";

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