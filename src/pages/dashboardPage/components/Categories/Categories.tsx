import { Link } from "react-router-dom";
import { CategoriesItem } from "./CategoriesItem/CategoriesItem";

export const Categories = () => {
  return (
    <div className="bg-gray-800 rounded-lg p-5 w-2/5">
      <div className="flex justify-between items-center mb-7">
        <h3 className="text-3xl font-semibold">Categories</h3>
        <Link
          to="/wallet"
          className="text-yellow-400 text-lg font-regular duration-300 hover:text-yellow-500 hover:duration-300"
        >
          Manage
        </Link>
      </div>
      <ul className="flex flex-col gap-6">
        <CategoriesItem icon="food" spent={3427} total={10000} />
        <CategoriesItem icon="house" spent={10000} total={15000} />
        <CategoriesItem icon="sport" spent={1453} total={4000} />
        <CategoriesItem icon="pet" spent={2750} total={3000} />
      </ul>
    </div>
  );
};
