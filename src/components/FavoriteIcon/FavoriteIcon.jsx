import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../../redux/favorites/slice";
import { selectFavorites } from "../../redux/favorites/selectors";
import css from "./FavoriteIcon.module.css";
import Icon from "../Icon/Icon";
export const FavoriteIcon = ({ carId }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const isFavorite = favorites.includes(carId);

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(carId));
  };

  return (
    // <img
    //   className={css.icon}
    //   src={isFavorite ? activeHeartIcon : HeartIcon}
    //   alt="favorite icon"
    //   aria-label="Add to favorites"
    //   onClick={handleToggleFavorite}
    // />
    <Icon
      name="Property-1Default"
      className={css.icon}
      onClick={handleToggleFavorite}
    />
  );
};
