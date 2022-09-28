import { useEffect, useState } from "react";
import axios from "axios";
import "./scss/app.scss";

import { Header } from "./components/Header/Header";
import { Categories } from "./components/Categories/Categories";
import { Sorting } from "./components/Sorting/Sorting";
import { Index } from "./components/PizzaBlock";
import { Skeleton } from "./components/PizzaBlock/Skeleton";

function App() {
  const [pizzaItems, setPizzaItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    axios
      .get("https://6322075efd698dfa29059061.mockapi.io/pizzas")
      .then((res) => {
        setPizzaItems(res.data);
      });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
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
        </div>
      </div>
    </div>
  );
}

export default App;
