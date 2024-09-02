import axios from "axios";

const PRODUCT_API_URL = "http://localhost:3000/api/v1/product"
const CART_API_URL = "http://localhost:3000/api/v1/cart"

export const addProductToCart = (cartId, productId) => {
    return axios.post(`${CART_API_URL}/${cartId}/${productId}`);
}

export const listUserCarts = (userId) => {
    return axios.get(`${CART_API_URL}/${userId}`);
}

export const createNewCart = (cartName, userId)=>{
    return axios.post(CART_API_URL,{cartName,userId});
  }