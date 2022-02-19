import { useEffect, useState } from "react";
import { createClient } from "contentful";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Home";
import ProductDetails from "./ProductDetails";

function App() {
  const [recipes, setRecipes] = useState("");

  const client = createClient({
    space: "ce9ul5aows38",
    accessToken: "QSWfTFWae4XyG8HC_Alqp2FjF-6GaaL9rBvL97l2xs4",
  });
  useEffect(() => {
    async function getRecipes() {
      const res = await client.getEntries({ content_type: "recipe" });

      setRecipes(res.items);
      console.log(res.items);
    }
    getRecipes();
  }, []);

  return (
    <>
      <div className="bg-white">
        <div className="max-w-2xl mx-auto  py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="mb-20 ">
            <h1 className="text-4xl sm:text-5xl  font-semibold  md:text-6xl text-center  ">
              Restaurant
            </h1>
          </div>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home recipes={recipes} />} />
              <Route
                path="/product/:id/*"
                element={<ProductDetails client={client} />}
              />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  );
}

export default App;
