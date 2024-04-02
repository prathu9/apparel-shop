"use client";
import Image from "next/image";
import { CategoryItemType } from "../../type";
import {
  BackgroundImage,
  DirectoryItemContainer,
  DirectoryItemBody,
} from "./directory-item.style";
import { StyleSheetManager } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";

type DirectoryItemProp = {
  directoryItem: CategoryItemType;
};

const DirectoryItem = ({ directoryItem }: DirectoryItemProp) => {
  const { imageUrl, title, ...rest } = directoryItem;

  return (
    <DirectoryItemContainer>
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
