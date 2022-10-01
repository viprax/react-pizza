import PropTypes from "prop-types";
import classes from "./Search.module.scss";

export const Search = () => {
  return (
    <input className={classes.root} placeholder="Поиск пиццы..." type="text" />
  );
};
