import Dollar from "../icons/Dollar";
import Location from "../icons/Location";
import styles from "./FoodDetailsPage.module.css";

function FoodDetailsPage({ data }) {
  const {
    id,
    name,
    price,
    details,
    discount,
    introduction,
    ingredients,
    recipe,
  } = data;
  console.log(0 && "hello");
  return (
    <div className={styles.container}>
      <h2>Details</h2>
      <div className={styles.subContainer}>
        <div className={styles.banner}>
          <img src={`/images/${id}.jpeg`} alt={name} />
          <div>
            <h3>{name}</h3>
            <span className={styles.location}>
              <Location />
              {details[0].Cuisine}
            </span>
            <span className={styles.price}>
              <Dollar />
              {discount ? (
                <span>{((price * (100 - discount)) / 100).toFixed(1)}$</span>
              ) : (
                <span>{price}$</span>
              )}
            </span>
            {discount > 0 && (
              <span className={styles.discount}>{discount}% OFF</span>
            )}
          </div>
        </div>
        <div className={styles.introduction}>
          <p>{introduction}</p>
        </div>
        <div className={styles.details}>
          <h4>Details</h4>
          <ul>
            {details.map((detail, index) => (
              <li key={index}>
                <p>{Object.keys(detail)[0]}: </p>
                <span>{Object.values(detail)[0]}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.details}>
          <h4>Ingredients</h4>
          <ul>
            {ingredients.map((item, index) => (
              <li key={index}>
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.recipe}>
          <h4>Recipe</h4>
          <ul>
            {recipe.map((item, index) => (
              <li key={index}>
                <span>{index + 1}</span>
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </div>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}

export default FoodDetailsPage;
