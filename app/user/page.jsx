import Link from "next/link";
import React from "react";
const fetchData = async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/users");
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default async function Users() {
  const response = await fetchData();
  const items = response?.map((e, index) => (
    <li key={index} className="bg-white p-4 rounded-lg shadow-md hover:bg-blue-50 transition duration-300">
      <Link href={`/user/${e?.id}`} className="text-lg font-semibold text-gray-700">{e?.username}</Link>
    </li>
  ));

  return (
    <>
      <h1 className="text-3xl font-bold text-center text-gray-800 my-6">User List</h1>
      <ul className="space-y-4 max-w-lg mx-auto">
        {items}
      </ul>
    </>
  );
}
