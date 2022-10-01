/* eslint-disable react/no-array-index-key */
import { useEffect, useState } from "react";
import axios from "axios";
import { Categories } from "../components/Categories/Categories";
import { Sorting } from "../components/Sorting/Sorting";
import { Skeleton } from "../components/PizzaBlock/Skeleton";
import { Index } from "../components/PizzaBlock";

export const Home = () => {
  const [pizzaItems, setPizzaItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoriesId, setCategoriesId] = useState(0);
  const [sortType, setSortType] = useState({
    name: "популярности (по убыв.)",
    sortProperty: "rating",
  });

  useEffect(() => {
    setIsLoading(true);
    const order = sortType.sortProperty.includes("-") ? "asc" : "desc";
    const sortBy = sortType.sortProperty.replace("-", "");
    const category = categoriesId > 0 ? `category=${categoriesId}` : "";
    axios
      .get(
        `https://6322075efd698dfa29059061.mockapi.io/pizzas?${category}&sortBy=${sortBy}&order=${order} `,
      )
      .then((res) => {
        setPizzaItems(res.data);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoriesId, sortType]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          value={categoriesId}
          onChangeCategory={(key) => setCategoriesId(key)}
        />
        <Sorting value={sortType} onChangeSort={(key) => setSortType(key)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : pizzaItems.map((obj) => (
              <Index
                key={obj.id}
                title={obj.title}
                price={obj.price}
                imgUrl={obj.imgUrl}
                size={obj.size}
                type={obj.type}
              />
            ))}
      </div>
    </div>
  );
};
