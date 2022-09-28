import { useEffect, useState } from "react";
import axios from "axios";
import { Categories } from "../components/Categories/Categories";
import { Sorting } from "../components/Sorting/Sorting";
import { Skeleton } from "../components/PizzaBlock/Skeleton";
import { Index } from "../components/PizzaBlock";

export const Home = () => {
  const [pizzaItems, setPizzaItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://6322075efd698dfa29059061.mockapi.io/pizzas")
      .then((res) => {
        setPizzaItems(res.data);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <div className="content__top">
        <Categories />
        <Sorting />
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
    </>
  );
};
