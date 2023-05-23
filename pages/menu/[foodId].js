import FoodDetailsPage from "@/components/templates/FoodDetailsPage";
import React from "react";

function FoodDetails({ data }) {
  return <FoodDetailsPage data={data} />;
}

export default FoodDetails;

export async function getStaticPaths() {
  const res = await fetch(`${process.env.BASE_URL}/data`);
  const data = await res.json();

  return {
    paths: data.map((item) => ({ params: { foodId: item.id.toString() } })),
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const {
    params: { foodId },
  } = context;
  const res = await fetch(`${process.env.BASE_URL}/data/${foodId}`);
  const data = await res.json();

  if (!Object.keys(data).length) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
    revalidate: +process.env.REVALIDATE, // Seconds
  };
}
