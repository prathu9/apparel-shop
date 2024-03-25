import { CategoryItemType } from "../../type";
import CategoryItem from "../directory-item/directory-item.component"
import "./directory.style.scss"

type DirectoryProp = {
  categories: CategoryItemType[];
};

const Directory = ({ categories }: DirectoryProp) => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} directoryItem={category} />
      ))}
    </div>
  );
};

export default Directory;
