import Image from "next/image";
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";
import "./product-card.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

const ProductCard = ({product}) => {
    const {name, price, imageUrl} = product;
    const {addItemToCart} = useContext(CartContext);

    const addProductToCart = () => addItemToCart(product);
    
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
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>
                Add To Cart
            </Button>
        </div>
    )    
}

export default ProductCard;

