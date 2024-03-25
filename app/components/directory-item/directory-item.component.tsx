import Image from "next/image";
import { CategoryItemType } from "../../type";
import "./directory-item.style.scss";

type DirectoryItemProp = {
  directoryItem: CategoryItemType;
};

const DirectoryItem = ({ directoryItem }: DirectoryItemProp) => {
  const { imageUrl, title } = directoryItem;

  return (
    <div className="directory-item-container">
      <Image
        className="background-image object-cover"
        src={imageUrl}
        alt="bg image"
        fill
        sizes="(min-width: 1000px) 100%"
      />

      <div className="directory-item-body">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default DirectoryItem;
