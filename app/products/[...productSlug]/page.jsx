import React from "react";
const fetchData = async (id) => {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
export default async function ProductDetails({ params }) {
  const product = await fetchData(params?.productSlug[0]);
  
  return (
    <>
      <div className="max-w-5xl mx-auto my-12 p-6 bg-white dark:bg-gray-900 rounded-3xl shadow-2xl">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Product Image */}
          <div className="w-full">
            <img
              src={product?.image}
              alt={product?.title}
              className="w-full h-full object-contain rounded-2xl shadow-md"
            />
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
              {product?.title}
            </h1>

            <p className="text-sm text-gray-500 dark:text-gray-300 mb-2">
              Category:{" "}
              <span className="capitalize font-medium">{product.category}</span>
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-200 mb-6 leading-relaxed">
              {product?.description}
            </p>

            <div className="flex items-center mb-4">
              <span className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400 mr-4">
                ${product?.price}
              </span>
              <div className="flex items-center gap-1 text-yellow-400">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09L5.4 12.545.9 8.91l6.01-.873L10 2.5l3.09 5.536 6.01.873-4.5 3.636 1.278 5.545z" />
                </svg>
                <span className="text-sm text-gray-800 dark:text-white">
                  {product?.rating?.rate}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-300">
                  / {product?.rating?.count} reviews
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-6 rounded-xl shadow hover:shadow-lg transition duration-200">
                Add to Cart
              </button>
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-xl shadow hover:shadow-lg transition duration-200">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// export const generateMetaData = async ({ params }) => {
//   const title = await params?.productSlug[1];
//   console.log(title);
// };
