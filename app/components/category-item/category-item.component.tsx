import Image from "next/image";
import { CategoryItemType } from "../../type";
import "./category-item.style.scss";

type CategoryItemProp = {
  categoryItem: CategoryItemType;
};

const CategoryItem = ({ categoryItem }: CategoryItemProp) => {
  const { imageUrl, title } = categoryItem;

  return (
    <div className="category-container">
      <Image
        className="background-image object-cover"
        src={imageUrl}
        alt="bg image"
        fill
        sizes="(min-width: 1000px) 100%"
      />

      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
