import CategoryItem from "../category-item/category-item.component"
import "./directory.style.scss"

type DirectoryProp = {
  categories: CategoryItem[];
};

const Directory = ({ categories }: DirectoryProp) => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} categoryItem={category} />
      ))}
    </div>
  );
};

export default Directory;
