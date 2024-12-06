import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import product from "../axios";

function ProductDetails() {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState(null);

  useEffect(() => {
    product(`products/${id}`)
      .then((response) => {
        setProductDetails(response.data.data)
      })
      .catch((error) => {
        console.log(error)
      });
  }, [id]);

  if (!productDetails)
    return (
      <div className="w-full h-60 flex justify-center items-center text-center bg-slate-200 mx-auto">
        <p className="text-3xl text-red-900">Loading...</p>
      </div>
    );

  const { title, price, description, image, company, colors, stock } =
    productDetails.attributes;

  const resPrice = (price / 100).toFixed(2);

  return (
    <div className="mb-4 mt-6 flex gap-20 justify-center px-10">
      <img
        src={image}
        alt=""
        className="w-[514px] h-96 object-cover rounded-lg lg:w-full"
      />
      <div>
        <h2 className="capitalize text-3xl font-bold">{title}</h2>
        <h5 className="text-xl text-neutral-content font-bold mt-2">
          {company}
        </h5>
        <h5 className="mt-2 text-xl">${resPrice}</h5>
        <p className="mt-6 w-[500px]">{description}</p>

        <div className="mt-6">
          {colors && colors.length > 0 && (
            <div>
              <h4 className="font-semibold">Colors</h4>
              <div className="mt-2 flex gap-2">
                {colors.map((value, index) => (
                  <button
                    key={index}
                    className={`w-8 h-8 rounded-full border-2 bg-${value}`}
                    style={{ backgroundColor: value }}
                  ></button>
                ))}
              </div>
            </div>
          )}

          <div className="mt-4">
            <h4 className="font-semibold">Amount</h4>
            <select className=" rounded-lg border border-black px-3 w-[300px] mx-auto order p-2 mt-2">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
            </select>
          </div>
        </div>

        <button className="mt-6 bg-primary text-white px-6 py-3 rounded-lg">
          Add to Bag
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
