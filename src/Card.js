import React from "react";
import { Link } from "react-router-dom";

export default function Card({ recipe }) {
  const { thumbnail, title, cookingTime, slug } = recipe.fields;
  return (
    <div className="relative border hover:shadow-md border-gray-200 shadow rounded-md w-72 sm:w-full mx-auto ">
      <div className="w-full  h-80  rounded-md overflow-hidden hover:opacity-90 ">
        <Link to={`product/${slug}`}>
          <img
            src={thumbnail.fields.file.url}
            alt={title}
            className="w-full h-full object-center object-cover "
          />
        </Link>
      </div>
      <div className="mt-4 flex justify-between px-2 mb-2">
        <div>
          <h3 className="text-sm text-gray-700">{title}</h3>
        </div>
        <p className="text-sm font-medium text-gray-800"> {cookingTime} $</p>
      </div>
    </div>
  );
}
