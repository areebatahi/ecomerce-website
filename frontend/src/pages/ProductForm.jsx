import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { toast } from "react-toastify";


// Validation Schema (Same as Backend Joi)
const productSchema = Yup.object({
  productName: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
  price: Yup.number().required("Required"),
  imageURL: Yup.string().url().required("Required"),
});

const ProductForm = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="max-w-lg mx-auto m-15 bg-white shadow-lg rounded-lg p-6 border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Add Product</h2>
      <Formik
        initialValues={{
          productName: "",
          description: "",
          price: "",
          imageURL: ""
        }}
        validationSchema={productSchema}
        onSubmit={async (values) => {
          setLoading(true);
          console.log("values:", values);
          try {
            const response = await fetch("http://localhost:4000/api/cart/product", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(values),
            });

            const data = await response.json();
            setLoading(false);
            console.log("Response:", response, "data", data);
            if (response.ok) {
              localStorage.setItem("productToken", data.product.token)
              localStorage.setItem("productId", data.product.id)
              toast.success(data.message);
              navigate('/product');
            } else {
              toast.error(data.message || "An error occurred while adding product");
            }
          } catch (error) {
            setLoading(false);
            console.log("Error:", error);
            toast.error(error.message || "An error occurred while adding product");
          }
        }}
      >
        <Form>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">product Name</label>
            <Field
              type="name"
              name="productName"
              placeholder="Enter Product Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <ErrorMessage name="name" component="p" className="text-red-500 text-sm" />

          </div>

          {/* Description */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">Description</label>
            <Field
              as="textarea"
              name="description"
              placeholder="Describe your product"
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <ErrorMessage name="description" component="p" className="text-red-500 text-sm" />

          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">price</label>
            <Field
              type="number"
              name="price"
              placeholder="Enter price"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <ErrorMessage name="price" component="p" className="text-red-500 text-sm" />

          </div>

          {/* Hosted URL */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">Image URL</label>
            <Field
              type="url"
              name="imageURL"
              placeholder="Enter images URL"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <ErrorMessage name="imageURL" component="p" className="text-red-500 text-sm" />
          </div>


          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gray-800 hover:bg-gray-900 text-white font-medium py-2 rounded-md transition-all duration-300 disabled:bg-gray-500"
            disabled={loading}
          >
            {loading ? "Add Product..." : "Add Product"}
          </button>
        </Form>
      </Formik>
    </div>
  );
}
export default ProductForm