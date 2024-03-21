import Image from "next/image";
import Button from "../button/button.component";
import "./product-card.styles.scss";

const ProductCard = ({product}) => {
    const {name, price, imageUrl} = product;
    return(
        <div className='product-card-container'>
            <div style={{width: '100%', height: '100%', position: 'relative'}}>
                <Image
                    src={imageUrl}
                    sizes="100vw"
                    fill
                    alt="product"
                />
            </div>
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button buttonType="inverted">
                Add To Cart
            </Button>
        </div>
    )    
}

export default ProductCard;

