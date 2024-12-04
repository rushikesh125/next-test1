import React from "react";

async function fetchProductInfo(id) {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
    cache: "no-store", // Fetch fresh data on each request (SSR)
  });
  const Data = await response.json();
  return Data;
}
const Product = async ({ params }) => {
  const { id } = await params;
  const productData = await fetchProductInfo(id);
  const { title, price, description, rating, image } = productData;
  console.log(productData);
  return (
    <div className="w-full  rounded-lg bg-slate-200 p-5 md:flex">
      <div className="w-full md:w-1/2 ">
        <img
          src={image}
          alt="product-img"
          className="mix-blend-multiply w-96 h-96 object-cover mx-auto"
        />
      </div>
      <div className="my-2 w-full md:w-1/2 ">
        <h1 className="my-2 text-3xl font-semibold">{title}</h1>
        <p className="my-2 text-xl text-gray-500">{description}</p>
        <p className="my-2 ">PRICE: $ {price}</p>
        <p className="my-2 ">Rating: {rating.rate}</p>
        <button className="my-2 rounded-lg bg-black text-white px-2 py-1">Add To Cart</button>
      </div>
    </div>
  );
};

export default Product;
