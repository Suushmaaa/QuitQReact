import axios from "axios";

const API_URL = "http://localhost:5000/api"; // Ensure this is correct

export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/products`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};
// Fetch product by ID
export const fetchProductById = async (id) => {
  try {
      const response = await axios.get(`${API_URL}/${id}`);
      return response.data;
  } catch (error) {
      console.error("Error fetching product", error);
      throw error;
  }
};

//  Create a new product
export const createProduct = async (productData) => {
  try {
      const response = await axios.post(API_URL, productData);
      return response.data;
  } catch (error) {
      console.error("Error creating product", error);
      throw error;
  }
};

// Update a product
export const updateProduct = async (id, updatedProduct) => {
  try {
      const response = await axios.put(`${API_URL}/${id}`, updatedProduct);
      return response.data;
  } catch (error) {
      console.error("Error updating product", error);
      throw error;
  }
};

//  Delete a product
export const deleteProduct = async (id) => {
  try {
      const response = await axios.delete(`${API_URL}/${id}`);
      return response.data;
  } catch (error) {
      console.error("Error deleting product", error);
      throw error;
  }
};


// Fetch all addresses
export const fetchAddresses = async () => {
    try {
        const response = await axios.get(`${API_URL}/addresses`);
        return response.data;
    } catch (error) {
        console.error("Error fetching addresses:", error);
        return [];
    }
};

// Fetch address by ID
export const fetchAddressById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/addresses/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching address:", error);
        throw error;
    }
};

// Create a new address
export const createAddress = async (addressData) => {
    try {
        const response = await axios.post(`${API_URL}/addresses`, addressData);
        return response.data;
    } catch (error) {
        console.error("Error creating address:", error);
        throw error;
    }
};

// Update an address
export const updateAddress = async (id, updatedAddress) => {
    try {
        const response = await axios.put(`${API_URL}/addresses/${id}`, updatedAddress);
        return response.data;
    } catch (error) {
        console.error("Error updating address:", error);
        throw error;
    }
};

// Delete an address
export const deleteAddress = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/addresses/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting address:", error);
        throw error;
    }
};



// ✅ Fetch all cart items
export const fetchCartItems = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error("Error fetching cart items:", error);
        return [];
    }
};

// ✅ Fetch a single cart item by ID
export const fetchCartItemById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching cart item:", error);
        throw error;
    }
};

// ✅ Add a new cart item
export const addCartItem = async (cartItem) => {
    try {
        const response = await axios.post(API_URL, cartItem);
        return response.data;
    } catch (error) {
        console.error("Error adding cart item:", error);
        throw error;
    }
};

// ✅ Delete a cart item
export const deleteCartItem = async (id) => {
    try {
        await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
        console.error("Error deleting cart item:", error);
        throw error;
    }
};


// ✅ Fetch cart by User ID
export const fetchCartByUserId = async (userId, token) => {
    try {
        const response = await axios.get(`${API_URL}/user/${userId}`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching cart:", error);
        throw error;
    }
};

// ✅ Add Item to Cart
export const addToCart = async (cartItem, token) => {
    try {
        const response = await axios.post(`${API_URL}/add`, cartItem, {
            headers: { Authorization: `Bearer ${token}` },
        });
        return response.data;
    } catch (error) {
        console.error("Error adding item to cart:", error);
        throw error;
    }
};

// ✅ Delete Cart Item
// export const deleteCartItem = async (itemId, token) => {
//     try {
//         await axios.delete(`${API_URL}/remove/${itemId}`, {
//             headers: { Authorization: `Bearer ${token}` },
//         });
//     } catch (error) {
//         console.error("Error deleting cart item:", error);
//         throw error;
//     }
// };


// ✅ Fetch all categories
export const fetchCategories = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error("Error fetching categories:", error);
        throw error;
    }
};

// ✅ Fetch category by ID
export const fetchCategoryById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching category:", error);
        throw error;
    }
};

// ✅ Add a new category
export const addCategory = async (category) => {
    try {
        const response = await axios.post(API_URL, category);
        return response.data;
    } catch (error) {
        console.error("Error adding category:", error);
        throw error;
    }
};

// ✅ Update category by ID
export const updateCategory = async (id, category) => {
    try {
        await axios.put(`${API_URL}/${id}`, category);
    } catch (error) {
        console.error("Error updating category:", error);
        throw error;
    }
};

// ✅ Delete category by ID
export const deleteCategory = async (id) => {
    try {
        await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
        console.error("Error deleting category:", error);
        throw error;
    }
};

// ✅ Fetch all orders
export const fetchOrders = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error("Error fetching orders:", error);
        throw error;
    }
};

// ✅ Fetch order by ID
export const fetchOrderById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching order:", error);
        throw error;
    }
};

// ✅ Add a new order
export const addOrder = async (order) => {
    try {
        const response = await axios.post(API_URL, order);
        return response.data;
    } catch (error) {
        console.error("Error adding order:", error);
        throw error;
    }
};

// ✅ Update order by ID
export const updateOrder = async (id, order) => {
    try {
        await axios.put(`${API_URL}/${id}`, order);
    } catch (error) {
        console.error("Error updating order:", error);
        throw error;
    }
};

// ✅ Delete order by ID
export const deleteOrder = async (id) => {
    try {
        await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
        console.error("Error deleting order:", error);
        throw error;
    }
};





export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/users/register`, userData);
    return response.data;
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
};

export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/users/login`, credentials);
    return response.data;
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
};
// Get all users (Admin Only)
export const getAllUsers = async (token) => {
  return axios.get(API_URL, {
      headers: { Authorization: `Bearer ${token}` }
  });
};

// Get user by ID
export const getUserById = async (id, token) => {
  return axios.get(`${API_URL}/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
  });
};

// Get logged-in user profile
export const getUserProfile = async (token) => {
  return axios.get(`${API_URL}/profile`, {
      headers: { Authorization: `Bearer ${token}` }
  });
};

// Update user details
export const updateUser = async (id, userData, token) => {
  return axios.put(`${API_URL}/${id}`, userData, {
      headers: { 
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
      }
  });
};

// Delete user (Admin Only)
export const deleteUser = async (id, token) => {
  return axios.delete(`${API_URL}/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
  });
};

// Logout user (JWT Blacklisting)
export const logoutUser = async (token) => {
  return axios.post(`${API_URL}/logout`, {}, {
      headers: { Authorization: `Bearer ${token}` }
  });
};