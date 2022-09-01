import React from "react";
import Title from "/src/title/title";
import Article from "/src/article/article";
import Image from "/src/image/image";
import TotalPrice from "/src/total-price/total-price";
import Counter from "/src/counter/counter";
import Delivery from "/src/delivery/delivery";
import Description from "/src/description/description";
import Button from "/src/button/button";
import Comments from "/src/comments/comments";
import TrustedProduct from "/src/trusted-product/trusted-product";

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
