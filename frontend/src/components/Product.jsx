import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Search } from "lucide-react";


const Product = () => {
     const [product, setproduct] = useState(null);
      const [loading, setLoading] = useState(true);
      const navigate = useNavigate();
    
      useEffect(() => {
        const fetchProductDetails = async () => {
          const token = localStorage.getItem("token");
          if (!token) {
            navigate("/productForm");
            return;
          }
    
          try {
            const response = await fetch("http://localhost:4000/api/cart/product/${}", {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
            });
    
            const data = await response.json();
            if (response.ok) {
              setUser(data.user);
              console.log(data.user)
            } else {
              toast.error(data.message || "Failed to fetch user details");
              navigate("/login");
            }
          } catch (error) {
            console.error("Error:", error);
            toast.error("An error occurred while fetching user details");
            navigate("/login");
          } finally {
            setLoading(false);
          }
        };
    
        fetchProductDetails();
      }, [navigate]);
    
      if (loading) {
        return (
          <div className="flex justify-center items-center min-h-screen">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
          </div>
        );
      }
    
      if (!user) {
        return (
          <div className="flex justify-center items-center min-h-screen">
            <p className="text-gray-700 text-lg">No user data available</p>
          </div>
        );
      }
    
      let deleteUser = async (id) => {
        try {
          const response = await fetch(`http://localhost:4000/api/auth/user/${id}`, {
            method: "DELETE"
          });
    
          const result = await response.json();
          if (response.ok) {
            console.log("User deleted:", result);
          localStorage.removeItem('token');
          localStorage.removeItem('userId');
            navigate("/signup");
          } else {
            toast.error(data.message || "Failed to delete user");
          }
        }
        catch (error) {
          console.error("Error:", error);
          toast.error("An error occurred while delete user");
        }
      }
    //   const [cart, setCart] = useState([]);
    //   const addToCart = () => {
    //     setCart([...cart, product]);
    //   };

    return (
        <>
            <div className="flex justify-between m-3 ">
                <div className="flex">
                    <div className="flex items-center bg-white border border-gray-300 m-2 shadow-md p-2 w-full max-w-md">
                        <Search className="text-gray-500 ml-2" size={20} />
                        <input
                            type="text"
                            placeholder="Search projects..."
                            className="w-full px-3 py-2 outline-none bg-transparent"
                        />
                    </div>
                    <button className='w-auto bg-white border hover:bg-gray-100 border-gray-300 shadow-md m-2 p-2 max-w-md cursor-pointer'>search</button>
                </div>
                <button className='w-auto bg-green-600 hover:bg-green-700 text-white border border-gray-300 shadow-md m-2 p-2 max-w-md cursor-pointer' onClick={() => {navigate('/productForm')}}>Add Product</button>
            </div>

            <hr />
            <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
                <div class="container mx-auto px-4 py-10">
                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center">
                            <img src='gfgfg' className="w-full h-64 object-cover rounded-lg" />
                            <h2 className="text-2xl font-semibold mt-4"></h2>
                            <p className="text-gray-500 mt-2"></p>
                            <p className="text-lg font-bold mt-2">$</p>
                            <button
                                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                            //   onClick={addToCart}
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Cart Section
      {cart.length > 0 && (
        <div className="mt-6 p-4 bg-white rounded-lg shadow-lg w-full max-w-md">
          <h3 className="text-lg font-semibold">Shopping Cart ({cart.length})</h3>
          <ul className="mt-2">
            {cart.map((item, index) => (
              <li key={index} className="flex justify-between border-b py-2">
                <span>{item.name}</span>
                <span className="font-bold">${item.price}</span>
              </li>
            ))}
          </ul>
        </div>
      )} */}

        </>
    );
}
export default Product