// app/products/Products.js (Client Component)
'use client'

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 

export default function Products({ products }) {
  const settings = {
    dots: false, // Show dots for navigation
    infinite: true, // Infinite scroll
    speed: 500, // Transition speed
    arrows:false,
    slidesToShow: 4, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at once
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Time interval for each slide
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full py-10">
      <Slider {...settings}>
        {products.map((item) => (
          <div key={item.id} className="w-full bg-white shadow-lg rounded-lg overflow-hidden m-2 p-4 transform transition duration-300 hover:scale-105">
            <div className="w-full text-center mb-4">
              <img className="w-44 h-44 object-cover mx-auto" alt="product-img" src={item.image} />
            </div>
            <div className="text-center">
              <h1 className="text-xl font-semibold text-gray-800">{item.title}</h1>
              <p className="text-gray-600 text-lg">Price: ${item.price}</p>
              <p className="text-yellow-500 text-sm">Rating: {item.rating.rate}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
