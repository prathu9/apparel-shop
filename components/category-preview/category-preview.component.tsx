"use client";
import { FC } from "react";
import { CategoryItemType } from "../../type";
import ProductCard from "../product-card/product-card.component";

import "./category-preview.styles.scss";
import Button from "../button/button.component";
import { useRouter } from "next/navigation";

const CategoryPreview: FC<{
    title: string,
    products: CategoryItemType[]
}> = ({title, products}) => {
    const router = useRouter();

    const handleClickMore = () => {
        router.push(`/shop/${title}`);
    }

    return(
        <div className="category-preview-container">
            <h2>
                <span className="title">{title.toUpperCase()}</span>
            </h2>
            <div className="preview">
                {
                    products
                    .filter((_, idx) => idx < 4)
                    .map((product) => (
                        <ProductCard key={product.id} product={product}/>
                    ))
                }
            </div>
            <div className="show-more">
            <Button onClick={handleClickMore}>
                More
            </Button>
            </div>
        </div>
    )
}

export default CategoryPreview;