<<<<<<< HEAD
import React from 'react';
import { ProductData } from './ProductData';


const ProductList = () => {
  return (
    <div id="scart">
      <h1 className="headings">Products</h1>
      <br /><br /><br />
      <div className="container">
        <div className="row mb-5">
          <form className="col-md-12" method="post">
            <table className="table">
              <thead>
                <tr>
                  <th> </th>
                  <th className="product-name">Product Name</th>
                  <th className="product-brand">Brand</th>
                  <th className="product-stock">Stock</th>
                  <th className="product-sales">Sales</th>
                  <th className="product-price">Price</th>
                  <th>Options</th>
                </tr>
              </thead>
              <tbody>
                {ProductData.map((product) => (
                  <tr key={product.id}>
                    <td><input type="checkbox" /></td>
                    <td><img src={product.icon } alt={product.name} /> {product.name}</td>
                    <td>{product.brand}</td>
                    <td>{product.stock}</td>
                    <td>{product.sales}</td>
                    <td>{product.price}</td>
                    <td>
                      {/* Add your options here */}
                      <button></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductList;


=======
import React from 'react'

function ProductList() {
  return (
    <div>ProductList</div>
  )
}

export default ProductList
>>>>>>> 21c9e8e568cea707032ef13dd6acc0dad71d2bdb
