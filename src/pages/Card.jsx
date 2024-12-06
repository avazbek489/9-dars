import React from "react";
import { Link } from "react-router-dom";

function Card({ product }) {
  const { id, attributes } = product;
  const { price, image, title } = attributes;
  const resPrice = (price / 100).toFixed(2);

  return (
    <Link
      to={`/products/${id}`}
      className="card bg-gray-50 border shadow-xl p-4"
    >
      <div className="flex flex-col items-center hover:scale-105 transition duration-700 ease-in-out gap-2">
        <img
          src={image}
          alt={title}
          className="rounded-2xl w-full h-48 object-cover"
        />
        <h2 className="text-xl font-bold mt-2">{title}</h2>
        <p className="text-xl">${resPrice}</p>
      </div>
    </Link>
  );
}

export default Card;
