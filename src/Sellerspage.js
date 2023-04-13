import React, { useState } from "react";

const Sellerspage = () => {
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({
      id: '',
      name: '',
      price: ''
    });
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setNewProduct({ ...newProduct, [name]: value });
    };
  
    const handleAddProduct = () => {
      setProducts([...products, newProduct]);
      setNewProduct({ id: '', name: '', price: '' });
    };
  
    const handleDeleteProduct = (index) => {
      const updatedProducts = [...products];
      updatedProducts.splice(index, 1);
      setProducts(updatedProducts);
    };
  
    const calculateTotalPrice = () => {
      const total = products.reduce((sum, product) => sum + Number(product.price), 0);
      return total;
    };
  
    return (
      <div>
        <h1>Seller Admin Page</h1>
        <div>
          <h2>Add Product</h2>
          <form>
            <label>
              Product ID:{' '}
              <input
                type="number"
                name="id"
                value={newProduct.id}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label>
              Product Name:{' '}
              <input
                type="text"
                name="name"
                value={newProduct.name}
                onChange={handleInputChange}
              required/>
            </label>
            <br />
            <label>
              Selling Price:{' '}
              <input
                type="number"
                name="price"
                value={newProduct.price}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <button type="button" onClick={handleAddProduct}>
              Add Product
            </button>
          </form>
        </div>
        <div>
          <h2>Products</h2>
          <ul>
            {products.map((product, index) => (
              <li key={index}>
                {product.id}-{product.name}-{product.price}
                <button onClick={() => handleDeleteProduct(index)}>Delete</button>
              </li>
            ))}
          </ul>
          <h2>Total Price: Rs. {calculateTotalPrice()}</h2>
        </div>
      </div>
    );
  };
  
  export default Sellerspage;