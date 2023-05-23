import CategoriesPage from "@/components/templates/CategoriesPage";
import React from "react";

function Categories({ data }) {
  return <CategoriesPage data={data} />;
}

export default Categories;

export async function getServerSideProps(context) {
  const res = await fetch(`${process.env.BASE_URL}/data`);
  const data = await res.json();

  const { difficulty, time } = context.query;

  const filteredData = data.filter((item) => {
    const difficultyResult = item.details.filter(
      (detail) => detail.Difficulty && detail.Difficulty === difficulty
    );

    const timeResult = item.details.filter((detail) => {
      const cookingTime = detail["Cooking Time"] || "";
      const [timeDetail] = cookingTime.split(" ");

      if (time === "less" && timeDetail && +timeDetail <= 30) return true;
      else if (time === "more" && timeDetail && +timeDetail > 30) return true;
    });

    if (time && difficulty && timeResult.length && difficultyResult.length) {
      return true;
    } else if (!time && difficulty && difficultyResult.length) {
      return true;
    } else if (time && !difficulty && timeResult.length) {
      return true;
    }

    return false;
  });

  return {
    props: { data: filteredData },
  };
}
