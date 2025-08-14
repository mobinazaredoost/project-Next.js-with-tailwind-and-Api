import React from "react";

const fetchData = async (id) => {
  try {
    const res = await fetch(`https://fakestoreapi.com/users/${id}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default async function UserDetails({ params }) {
  const data = await fetchData(params?.userId);
  if (!data) return <div>Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">User Details</h1>
      <div className="space-y-4">
        <div className="flex justify-between">
          <span className="font-semibold text-gray-600">Username:</span>
          <span className="text-gray-800">{data.username}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold text-gray-600">Name:</span>
          <span className="text-gray-800">{data.name.firstname} {data.name.lastname}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold text-gray-600">Email:</span>
          <span className="text-gray-800">{data.email}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold text-gray-600">Phone:</span>
          <span className="text-gray-800">{data.phone}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold text-gray-600">Address:</span>
          <span className="text-gray-800">
            {data.address?.street}, {data.address?.city}, {data.address?.zipcode}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold text-gray-600">Location:</span>
          <span className="text-gray-800">
            Latitude: {data.address?.geolocation?.lat}, Longitude: {data.address?.geolocation?.long}
          </span>
        </div>
      </div>
    </div>
  );
}
