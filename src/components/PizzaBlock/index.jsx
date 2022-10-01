/* eslint-disable react/no-array-index-key */
import { useState } from "react";
import PropTypes from "prop-types";

export const Index = ({
  title = "Title",
  price = 0,
  imgUrl = "https://via.placeholder.com/150",
  type = 0,
  size = 0,
}) => {
  const [cartCount, setCartCount] = useState(0);
  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);

  const handleClickAdd = () => {
    setCartCount(cartCount + 1);
  };
  const typeName = ["традиционное", "тонкое"];

  return (
    <div className="pizza-block-wrapper">
      <div className="pizza-block">
        <img className="pizza-block__image" src={imgUrl} alt="Pizza" />
        <h4 className="pizza-block__title">{title}</h4>
        <div className="pizza-block__selector">
          <ul>
            {type.map((typeIndex, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActiveType(typeIndex)}
                className={activeType === typeIndex ? "active" : ""}
              >
                {typeName[typeIndex]}
              </button>
            ))}
          </ul>
          <ul>
            <ul className="active">
              {size.map((pizzaSize, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveSize(index)}
                  className={activeSize === index ? "active" : ""}
                >
                  {pizzaSize} см.
                </button>
              ))}
            </ul>
          </ul>
        </div>
        <div className="pizza-block__bottom">
          <div className="pizza-block__price">от {price} ₽</div>
          <button
            type="button"
            className="button button--outline button--add"
            onClick={handleClickAdd}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span>Добавить</span>
            <i>{cartCount}</i>
          </button>
        </div>
      </div>
    </div>
  );
};

Index.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  imgUrl: PropTypes.string,
  size: PropTypes.arrayOf(PropTypes.number),
  type: PropTypes.arrayOf(PropTypes.number),
};
