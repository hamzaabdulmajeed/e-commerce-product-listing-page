const Filters = ({ 
  categories, 
  selectedCategory, 
  onCategoryChange, 
  priceRange, 
  onPriceChange,
  onClearFilters 
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md sticky top-4">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold">Filters</h3>
        <button
          onClick={onClearFilters}
          className="text-sm text-blue-500 hover:text-blue-700"
        >
          Clear All
        </button>
      </div>
      
      <div className="mb-6">
        <label className="block text-sm font-semibold mb-3 text-gray-700">
          Category
        </label>
        <select
          value={selectedCategory}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 capitalize"
        >
          <option value="">All Categories</option>
          {categories.map(cat => (
            <option key={cat} value={cat} className="capitalize">
              {cat}
            </option>
          ))}
        </select>
      </div>
      
      <div>
        <label className="block text-sm font-semibold mb-3 text-gray-700">
          Max Price: <span className="text-blue-600">${priceRange}</span>
        </label>
        <input
          type="range"
          min="0"
          max="1000"
          step="10"
          value={priceRange}
          onChange={(e) => onPriceChange(Number(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>$0</span>
          <span>$1000</span>
        </div>
      </div>
    </div>
  );
};

export default Filters;