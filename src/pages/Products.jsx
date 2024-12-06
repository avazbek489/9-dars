import React, { useEffect, useState } from "react";
import product from "../axios";
import Card from "./Card";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    product("products")
      .then((response) => {
        console.log(response);

        setProducts(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {products.length > 0 &&
        products.map((value) => <Card key={value.id} product={value} />)}
    </div>
  );
}

export default Products;
