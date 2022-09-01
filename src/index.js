import ReactDom from "react-dom";
import { product } from "./mock";

import ProductCard from "/src/product-card/product-card";

const rootElement = document.getElementById("root");
ReactDom.render(<ProductCard product={product} />, rootElement);
