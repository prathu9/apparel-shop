import CheckoutTable from "../../components/checkout-table/checkout-table.component";

import "./checkout.styles.scss";

export default function CheckoutPage(){
    return(
        <div className="checkout-container">
            <h1>Checkout</h1>
            <CheckoutTable />
        </div>
    )
}

