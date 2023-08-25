import React from "react";
import PropTypes from "prop-types";
import TableRow from "./TableRow";

export default function TableBody({ isCheckout, products, location }) {
  return (
    <tbody> {/* Use <tbody> instead of <TableBody> */}
      {products.map(({ id, name, price, quantity }, index) => (
        <TableRow
          key={id}
          id={id}
          description={name}
          price={price}
          quantity={quantity}
          isCheckout={isCheckout}
          location={location}
          index={index}
        />
      ))}
    </tbody>
  );
}

TableBody.propTypes = {
  isCheckout: PropTypes.bool.isRequired,
  location: PropTypes.string.isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      price: PropTypes.string.isRequired,
    })
  ).isRequired,
};
