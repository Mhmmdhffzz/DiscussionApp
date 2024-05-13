// CategoryList.jsx
import React from 'react';
import PropTypes from 'prop-types';
import CategoryItem from './CategoryItem';

function CategoryList({ categories, onCategoryClick }) {
  return (
    <div className="m-6">
      <h2 className="mb-4 text-xl font-semibold text-gray-800">Popular Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map((category) => (
          <CategoryItem
            key={category}
            text={category}
            onClick={() => onCategoryClick(category)}
          />
        ))}
      </div>
    </div>
  );
}

CategoryList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  onCategoryClick: PropTypes.func.isRequired,
};

export default CategoryList;
