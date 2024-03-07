import Image from "next/image";

export default function Home() {
  const categories = [
    {
      id: 1,
      title: "Hats",
    },
  ];
  return (
    <main className="">
      <div className="categories-container">
        {categories.map(({id, title }) => (
          <div key={id} className="category-container">
            <div className="category-body-container">
              <h2>{title}</h2>
              <p>Shop Now</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
