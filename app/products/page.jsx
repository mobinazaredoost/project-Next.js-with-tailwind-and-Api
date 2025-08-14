import Card from "@/Components/Card";
import React from "react";
const fetchData = async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
export default async function Products() {
  const products = await fetchData();
  const items = products?.map((e, index) => (
    <Card
      key={index}
      title={e.title}
      description={e?.description}
      category={e?.category}
      image={e?.image}
      price={e?.price}
      rating={e?.rating}
      id={e?.id}
    />
  ));
  return (
    <>
      <div className="grid grid-cols-4 gap-[20px] py-4 px-3">{items}</div>
    </>
  );
}
