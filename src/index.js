import ReactDom from "react-dom";
import { product } from "./mock";

import ProductCard from "./product-card";

const rootElement = document.getElementById("root");
ReactDom.render(<ProductCard product={product} />, rootElement);
