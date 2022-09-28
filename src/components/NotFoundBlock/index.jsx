import classes from "./NotFoundBlock.module.scss";

export const NotFoundBlock = () => {
  return (
    <div className={classes.root}>
      <h1>
        Ничего не найдено
        <span>😕</span>
      </h1>
      <p className={classes.description}>
        Вероятней всего, вы ещё не заказывали пиццу. Для того, чтобы заказать
        пиццу, перейди на главную страницу.
      </p>
    </div>
  );
};
