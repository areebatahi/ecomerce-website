import { useState } from "react";
import { Search } from "lucide-react";

const Product = () => {
    //   const [cart, setCart] = useState([]);

    const product = {
        id: 1,
        name: "Wireless Headphones",
        price: 99.99,
        image: "https://via.placeholder.com/300",
        description: "High-quality wireless headphones with noise cancellation."
    };

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
                <button className='w-auto bg-green-600 hover:bg-green-700 text-white border border-gray-300 shadow-md m-2 p-2 max-w-md cursor-pointer' onClick={() => { navigate('/projectForm') }}>Add Product</button>
            </div>

            <hr />
            <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
                <div class="container mx-auto px-4 py-10">
                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center">
                            <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-lg" />
                            <h2 className="text-2xl font-semibold mt-4">{product.name}</h2>
                            <p className="text-gray-500 mt-2">{product.description}</p>
                            <p className="text-lg font-bold mt-2">${product.price}</p>
                            <button
                                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                            //   onClick={addToCart}
                            >
                                Add to Cart
                            </button>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center">
                            <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-lg" />
                            <h2 className="text-2xl font-semibold mt-4">{product.name}</h2>
                            <p className="text-gray-500 mt-2">{product.description}</p>
                            <p className="text-lg font-bold mt-2">${product.price}</p>
                            <button
                                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                            //   onClick={addToCart}
                            >
                                Add to Cart
                            </button>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center">
                            <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-lg" />
                            <h2 className="text-2xl font-semibold mt-4">{product.name}</h2>
                            <p className="text-gray-500 mt-2">{product.description}</p>
                            <p className="text-lg font-bold mt-2">${product.price}</p>
                            <button
                                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                            //   onClick={addToCart}
                            >
                                Add to Cart
                            </button>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center">
                            <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-lg" />
                            <h2 className="text-2xl font-semibold mt-4">{product.name}</h2>
                            <p className="text-gray-500 mt-2">{product.description}</p>
                            <p className="text-lg font-bold mt-2">${product.price}</p>
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