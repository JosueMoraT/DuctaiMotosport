import { useContext } from "react";
import { FavoritesContext } from "../../provider/FavoritesContex";
import { ProductCardProps } from "../../components/ProductCard/ProductCard";
import { setToLocalStorage } from "../../utils/localStorage";
import Button from "../../components/Button/Button";
import "./Favorites.styles.scss";

const FAVORITES_LIST_KEY = "FAVORITES_LIST_KEY";

const FavoritesPage: React.FC = () => {
  const { favoritesList, setFavoritesList } = useContext(FavoritesContext);

  const handleClick = (id: string) => {
    const updatedList = favoritesList.filter((product: ProductCardProps) => {
      return product.id !== id;
    });
    setFavoritesList(updatedList); // Actualiza la lista de favoritos
    setToLocalStorage(FAVORITES_LIST_KEY, updatedList); // Guarda la lista actualizada en LocalStorage
  };

  return (
    <div className="favorites-page">
      <h1>Favoritos</h1>
      <div className="favorites-page-list">
        <div className="favorites-page-list-headline">
          <label>Precio</label>
        </div>
        {favoritesList.map((product: ProductCardProps) => (
          <div key={product.id} className="favorites-page-product">
            <div className="favorites-page-product-image">
              <img src={product.imagesUrl[0]} alt={product.description} />
            </div>
            <div className="favorites-page-product-desc">
              <div>{product.description}</div>
              <Button
                type="button"
                onClick={() => handleClick(product.id)}
                label="Eliminar"
                className="dark"
              />
            </div>
            <div className="favorites-page-product-price">
              ${product.price}
            </div>
          </div>
        ))}
        {favoritesList.length === 0 && <p>No tienes productos en favoritos.</p>}
      </div>
    </div>
  );
};

export { FavoritesPage };