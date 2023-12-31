import React, { useState, useEffect, useCallback } from "react";
import { useHistory } from "react-router-dom";
import NavBar, { Loading, ProductCard } from "../../components";
import { CART_KEY } from "../../constants";
import { getAPI, localStorageHandling } from "../../utils";
import "./index.css";

const { getLocalStorage, setStorageArray } = localStorageHandling;

export default function Products() {
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [cartList, setCartList] = useState([]);
  const [indexToChange, setIndexToChange] = useState();
  const [storage, setStorage] = useState([]);
  const [total, setTotal] = useState(0);

  const setInitialValues = (localStorage) => {
    setCartList((prev) =>
      prev.map((item, index) => {
        const match = localStorage.find((i) => i.id - 1 === index);
        return match ? match.quantity : item;
      })
    );
  };

  useEffect(() => {
    const getProcuctList = async () => {
      await getAPI("/products", (data) => {
        setProducts(data);
        setLoading(false);
      });
    };
    getProcuctList();
    setStorage(getLocalStorage(CART_KEY));
  }, []);

  useEffect(() => {
    const localStorage = getLocalStorage(CART_KEY);
    setCartList(products.map(() => 0));
    setInitialValues(localStorage);
  }, [products]);

  const handleCardBtn = ({ target }, index) => {
    const { name } = target;
    if (name === "addButton") {
      setCartList((prev) => prev.map((p, ind) => (ind === index ? p + 1 : p)));
    }
    if (name === "minusButton" && cartList[index] > 0) {
      setCartList((prev) => prev.map((p, ind) => (ind === index ? p - 1 : p)));
    }
    setIndexToChange(index);
  };

  const handleChange = (value, index) => {
    setCartList((prev) =>
      prev.map((p, ind) => {
        if (ind === index) {
          return value >= products[index].stockQty
            ? products[index].stockQty
            : value;
        }
        return p;
      })
    );
    setIndexToChange(index);
  };

  const setStorageInfo = useCallback(
    (cart, product) => {
      const { urlImage, ...persist } = product;
      const infoToStore = { ...persist, quantity: cartList[indexToChange] };
      const localStorage = setStorageArray(cart, infoToStore, CART_KEY);
      setStorage(localStorage);
    },
    [cartList, indexToChange]
  );

  useEffect(() => {
    if (indexToChange !== undefined) {
      const cart = getLocalStorage(CART_KEY);
      setStorageInfo(cart, products[indexToChange]);
    }
  }, [cartList, products, indexToChange, setStorageInfo]);

  useEffect(() => {
    const newTotal = storage.reduce(
      (acc, { quantity, price }) => acc + +price * quantity,
      0
    );
    setTotal(newTotal);
  }, [storage]);

  return (
    <div className="c-main">
      <NavBar route="customer" />
      {loading ? (
        <Loading />
      ) : (
        <section className="c-body c-list-card">
          {products.map(({ id, name, urlImage, price, stockQty }, index) => (
            <ProductCard
              key={id}
              id={id}
              title={name}
              stockQty={stockQty}
              thumbnail={urlImage}
              price={price}
              quantity={cartList[index]}
              onClick={handleCardBtn}
              onChange={handleChange}
              index={index}
              saveButton={() => {}}
            />
          ))}
        </section>
      )}
      <button
        data-testid="customer_products__button-cart"
        type="button"
        className="base-btn primary-btn c-main__cart-btn"
        disabled={+total === 0}
        onClick={() => history.push("/customer/checkout")}
      >
        Ver Carrinho:
        <span> R$ </span>
        <span data-testid="customer_products__checkout-bottom-value">
          {total.toFixed(2).replace(".", ",")}
        </span>
      </button>
    </div>
  );
}
