import CheckoutTable from "../components/checkout-table/checkout-table.component";

import "./checkout.styles.scss";

export default function CheckoutPage(){
    return(
        <div className="checkout-container">
            <h1>I am the checkout page</h1>
            <CheckoutTable />
        </div>
    )
}

