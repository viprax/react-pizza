/* eslint-disable react/no-array-index-key */
import PropTypes from "prop-types";

export const Categories = ({
  value = 0,
  onChangeCategory = () => undefined,
}) => {
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианские",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, key) => (
          <button
            key={key}
            type="button"
            onClick={() => onChangeCategory(key)}
            className={value === key ? "active" : ""}
          >
            {categoryName}
          </button>
        ))}
      </ul>
    </div>
  );
};

Categories.propTypes = {
  value: PropTypes.number,
  onChangeCategory: PropTypes.func,
};
