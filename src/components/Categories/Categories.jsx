import { useState } from "react";

export const Categories = () => {
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианские",
    "Гриль",
    "Острые",
    "Закрытые",
  ];
  const [activeItem, setActiveItem] = useState(0);

  return (
    <div className="categories">
      <ul>
        {categories.map((item, key) => (
          <button
            type="button"
            onClick={() => setActiveItem(key)}
            className={activeItem === key ? "active" : ""}
          >
            {item}
          </button>
        ))}
      </ul>
    </div>
  );
};
