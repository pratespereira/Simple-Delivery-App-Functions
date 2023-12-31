import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import TableHead, { TableBody } from "./components";
import { cartContext } from "../../context";
import "./index.css";

const WHICH_LOCATION = {
  "/customer/checkout": "customer_checkout",
  "/customer/orders": "customer_order_details",
  "/seller/orders": "seller_order_details",
};
export default function OrderTable() {
  const { products, totalPrice } = useContext(cartContext);
  const {
    location: { pathname },
  } = useHistory();
  const LOCATION = WHICH_LOCATION[pathname];
  const isCheckout = pathname === "/customer/checkout";

  return (
    <section className="c-mediun c-table">
      <table className="c-table__table">
        <TableHead isCheckout={isCheckout} />
        <TableBody
          isCheckout={isCheckout}
          location={LOCATION}
          products={products}
        />
      </table>
      <p className="c-table__total-price">
        Total: R${" "}
        <samp data-testid={`${LOCATION}__element-order-total-price`}>
          {`${totalPrice.replace(".", ",")}`}
        </samp>
      </p>
    </section>
  );
}
