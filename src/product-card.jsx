import React from "react";
import Title from "./title";
import Article from "./article";
import Image from "./image";
import TotalPrice from "./total-price";
import Counter from "./counter";
import Delivery from "./delivery";
import Description from "./description";
import Button from "./button";
import Comments from "./comments";
import TrustedProduct from "./trusted-product";

function ProductCard({ product }) {
  return (
    <section>
      <Title title={product.name} />
      <Article article={product.article} />
      <div style={{ display: "flex" }}>
        <Image alt={product.image.alt} src={product.image.src} />
        <div>
          {/* <p>
            Цена: <OldPrice oldPrice={product.oldPrice} />
            <Price price={product.price} />
          </p> */}
          <TotalPrice oldPrice={product.oldPrice} price={product.price} />
          <div>
            Количество: <Counter />
          </div>
          <Delivery delivery={product.delivery} />
          <Button text="Купить" />
          <TrustedProduct comments={product.comments}/>
        </div>
      </div>
      <div>
        <Description description={product.description} />
        <Button text="Подробнее" />
      </div>
      <div>
        <Comments comments={product.comments} />  
      </div>  
    </section>
  );
}

export default ProductCard;
