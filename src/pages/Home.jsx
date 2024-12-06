import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import product from "../axios";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    product("products")
      .then((response) => {
        setProducts(response.data.data);
      })
      .catch((error) => {
        console.log(error)
      })
  }, []);

  return (
    <div className="p-8 lg:p-20">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-primary">
            We are changing the way people shop
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
            repellat explicabo enim soluta temporibus asperiores aut obcaecati
            perferendis porro nobis.
          </p>
          <button className="btn btn-primary mt-6 px-6 py-3 text-lg">
            OUR PRODUCTS
          </button>
        </div>
        <div className="carousel w-full lg:w-1/2 rounded-lg shadow-lg">
          {products.map((product) => {
            const { attributes } = product;
            const imageUrl = attributes.image;
            return (
              <div className="carousel-item relative w-full">
                <img src={imageUrl} alt="" className="w-full h-96 object-cover" />
              </div>
            );
          })}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {products.slice(0, 3).map((value) => {
          const { id, attributes } = value;
          const { name, price, image, title } = attributes;
          const resPrice = (price / 100).toFixed(2);
          return (
            <Link key={id} to={`/products/${id}`} className="cursor-pointer">
              <div className="shadow-md rounded-lg p-4 flex flex-col items-center gap-1">
                <img
                  src={image}
                  alt=""
                  className="w-full h-48 object-cover rounded-xl"
                />
                <h2 className="mt-2 card-title capitalize tracking-wider">
                  {title}
                </h2>
                <h2 className="mt-2 text-lg font-semibold">{name}</h2>
                <p className="text-gray-500">${resPrice}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
