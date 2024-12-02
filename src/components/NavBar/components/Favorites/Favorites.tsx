import { FaRegHeart } from "react-icons/fa";
import { IconLink } from "../../../IconLink/IconLink";
import { useContext, useEffect, useState } from "react";
import { FavoritesContext } from "../../../../provider/FavoritesContex";

const Favorites: React.FC = () => {
  const { favoritesList } = useContext(FavoritesContext);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(favoritesList ? favoritesList.length : 0);
  }, [favoritesList]);

  return (
    <div>
      <IconLink
        href="/favorites"
        label={favoritesList && favoritesList.length > 0 ? String(count) : ""}
      >
        <FaRegHeart />
      </IconLink>
    </div>
  );
};

export { Favorites };