"use client";
import { CategoryItemType } from "../../type";
import {
  BackgroundImage,
  DirectoryItemContainer,
  DirectoryItemBody,
} from "./directory-item.style";
import { StyleSheetManager } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";
import { useRouter } from "next/navigation";

type DirectoryItemProp = {
  directoryItem: CategoryItemType;
};

const DirectoryItem = ({ directoryItem }: DirectoryItemProp) => {
  const { imageUrl, title, route } = directoryItem;

  const router = useRouter();

  const onRouteChangeHandler = () => router.push(route);

  return (
    <DirectoryItemContainer onClick={onRouteChangeHandler}>
      <StyleSheetManager shouldForwardProp={isPropValid}>
        <BackgroundImage imageurl={imageUrl} />
      </StyleSheetManager>
      <DirectoryItemBody>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </DirectoryItemBody>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
