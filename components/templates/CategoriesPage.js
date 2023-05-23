import { useRouter } from "next/router";
import styles from "./CategoriesPage.module.css";
import { useEffect, useState } from "react";
import Card from "../modules/Card";

function CategoriesPage({ data }) {
  const [query, setQuery] = useState({ difficulty: "", time: "" });

  const router = useRouter();

  function selectHandler(e) {
    setQuery((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function searchHandler() {
    router.push({ pathname: "/categories", query });
  }

  useEffect(() => {
    console.log(router.query);
    setQuery(router.query);
  }, []);

  return (
    <div className={styles.container}>
      <h2>Categories</h2>
      <div className={styles.subCategories}>
        <div className={styles.select}>
          <select
            value={query.difficulty}
            name="difficulty"
            onChange={selectHandler}
          >
            <option value="">Difficulty</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
          <select value={query.time} name="time" onChange={selectHandler}>
            <option value="">Cooking Time</option>
            <option value="more">More than 30 min</option>
            <option value="less">Less than 30 min</option>
          </select>
          <button onClick={searchHandler}>Search</button>
        </div>
        <div className={styles.cards}>
          {data && data.length ? (
            data.map((item) => <Card key={item.id} data={item} />)
          ) : (
            <img src="/images/search.png" alt="search" />
          )}
        </div>
      </div>
    </div>
  );
}

export default CategoriesPage;
