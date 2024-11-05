import React from "react";
import { productData } from '../data/mockData';
import { MdMoreVert } from "react-icons/md";

const ProductList = () => {
  const handleMoreOptionsClick = (productId) => {
    
    console.log(`More options for product ID: ${productId}`);
  };

  return (
    <div className="product-list p-4">
      <div className="flex justify-between mb-2 text-xs text-gray-500">
        <span>Name</span>
        <span>Brand</span>
        <span>Stock</span>
        <span>Sales</span>
        <span>Price</span>
        <span>Options</span>
      </div>
      {productData.map((product) => (
        <div key={product.id} className="product-item flex items-center p-1 border-b border-gray-200">
          <img 
            src={product.image} 
            alt={product.name} 
            className="rounded-full w-6 h-6 mr-2" 
          />
          <div className="flex-1 flex items-center justify-between text-xs text-gray-700">
            <span className="font-semibold text-xs mr-1">{product.name}</span>
            <span className="text-gray-500 text-xs mr-1">{product.stock}</span>
            <span className="text-gray-500 text-xs mr-1">{product.sales}</span>
            <span className="font-bold text-xs">${product.price}</span>
            <span 
              onClick={() => handleMoreOptionsClick(product.id)} 
              className="text-gray-600 hover:text-gray-800 cursor-pointer flex items-center text-xs ml-2"
            >
              <MdMoreVert size={16} className="mr-1" />
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;