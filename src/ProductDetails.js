import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ProductDetails({ client }) {
  const [recipe, setRecipe] = useState("");
  const { id } = useParams();

  useEffect(() => {
    async function getRecipes() {
      const { items } = await client.getEntries({
        content_type: "recipe",
        "fields.slug": id,
      });
      setRecipe(items);
    }
    getRecipes();
  }, []);
  if (recipe) {
    recipe.map((item) => console.log(item.fields));
  }
  return (
    <div>
      {recipe &&
        recipe.map((item) => (
          <div className="lg:max-w-4xl lg:mx-auto" key={item.sys.id}>
            <img
              className="rounded shado border border-gray-200"
              src={item.fields.featuredImage.fields.file.url}
              alt=""
            />
            <div className="p-3 text-gray-700">
              <div className="flex justify-between items-center">
                <h1 className="text-2xl sm:text-3xl pl-2 md:text-4xl my-5 lg:my-10 font-semibold">
                  {item.fields.title}
                </h1>
                <Link to="/">
                  <h3 className=" text-sky-700 md:text-xl lg:text-2xl underline">
                    {" "}
                    Home
                  </h3>
                </Link>
              </div>
              <div className="md:text-xl lg:text-2xl">
                {documentToReactComponents(item.fields.method)}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
