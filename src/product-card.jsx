import React from "react";
import Title from "./title";
import Article from "./article";
import Image from "./image";
import Price from "./price";
import OldPrice from "./old-price";
import Counter from "./counter";
import Delivery from "./delivery";
import Description from "./description";
import Button from "./button";

function ProductCard({ product }) {
  return (
    <section>
      <Title title={product.name} />
      <Article article={product.article} />
      <div style={{ display: "flex" }}>
        <Image alt={product.image.alt} src={product.image.src} />
        <div>
          <p>
            Цена: <OldPrice oldPrice={product.oldPrice} />{" "}
            <Price price={product.price} />
          </p>
          <div>
            Количество: <Counter />
          </div>
          <Delivery delivery={product.delivery} />
          <Button text="Купить" />
        </div>
      </div>
      <div>
        <Description description={product.description} />
        <Button text="Подробнее" />
      </div>
    </section>
  );
}

export default ProductCard;
