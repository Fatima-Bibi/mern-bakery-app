import React, { useState } from 'react';

const AddProduct = () => {
  const [formData, setFormData] = useState({
    cakeImage: '',
    cakeTitle: '',
    category: '',
    location: '',
    weight: '',
    description: '',
    price: '',
    stock: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleIncrement = () => {
    setFormData({
      ...formData,
      quantity: formData.quantity + 1,
    });
  };

  const handleDecrement = () => {
    if (formData.quantity > 1) {
      setFormData({
        ...formData,
        quantity: formData.quantity - 1,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can handle form submission logic here
    // For example, send the form data to the server or perform any other necessary actions
    console.log(formData);

    // Reset form fields if needed
    // setFormData({
    //   cakeImage: '',
    //   cakeTitle: '',
    //   category: 'cake',
    //   location: 'islamabad',
    //   weight: '',
    //   description: '',
    //   price: '',
    //   quantity: 1,
    // });
  };

  return (
    <div className="container mt-4">
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="cakeImage" className="form-label">Cake Image</label>
          <input
            type="file"
            className="form-control"
            id="cakeImage"
            name="cakeImage"
            value={formData.cakeImage}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="cakeTitle" className="form-label">Cake Title</label>
          <input
            type="text"
            className="form-control"
            id="cakeTitle"
            name="cakeTitle"
            value={formData.cakeTitle}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="category" className="form-label">Category</label>
          <select
            className="form-select"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="">Select option</option>
            <option value="cake">Cake</option>
            <option value="biscuit">Biscuit</option>
            <option value="pastry">Pastry</option>
            <option value="brownies">Brownies</option>
            <option value="dessertCupCake">Dessert Cup Cake</option>
            <option value="cookies">Cookies</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="location" className="form-label">Location</label>
          <select
            className="form-select"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
          >
            <option value="islamabad">Islamabad</option>
            <option value="rawalpindi">Rawalpindi</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="weight" className="form-label">Weight</label>
          <input
            type="number"
            className="form-control"
            id="weight"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="mb-3">
          <label htmlFor="price" className="form-label">Price</label>
          <input
            type="text"
            className="form-control"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="quantity" className="form-label">Stock</label>
          <div className="input-group">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={handleDecrement}
            >
              -
            </button>
            <input
              type="text"
              className="form-control text-center"
              id="quantity"
              name="quantity"
              value={formData.stock}
              readOnly
            />
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={handleIncrement}
            >
              +
            </button>
          </div>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default AddProduct;
