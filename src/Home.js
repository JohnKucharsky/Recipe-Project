import Card from "./Card";

export default function Home({ recipes }) {
  return (
    <>
      <div className="mt-6 grid  grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {recipes &&
          recipes.map((recipe) => <Card key={recipe.sys.id} recipe={recipe} />)}
      </div>
    </>
  );
}
