import Link from "next/link";
import styles from "./NotFoundPage.module.css";

function NotFoundPage() {
  return (
    <div className={styles.container}>
      <img src="/images/404.png" alt="404 page notfound" />
      <Link href="/">Back To FoodCommerce</Link>
    </div>
  );
}

export default NotFoundPage;
