import React from 'react';
import { categories, locations, priceRanges, languages } from '../lib/mockdata'

interface Category {
  name: string;
  color: string;
  count: number;
}

export default function FilterSection(): React.ReactElement {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h3 className="font-bold text-lg mb-4">Filters</h3>
      
      <div className="space-y-6">
        <div>
          <h4 className="font-medium mb-2">Categories</h4>
          <div className="space-y-2">
            {categories.map((category) => (
              <label key={category.name} className="flex items-center">
                <input 
                  type="checkbox" 
                  className="rounded text-purple-600 focus:ring-purple-500 mr-2"
                />
                <span>{category.name} ({category.count})</span>
              </label>
            ))}
          </div>
        </div>

        {/* Rest of the component remains the same */}
        {/* ... */}
      </div>
    </div>
  )
}