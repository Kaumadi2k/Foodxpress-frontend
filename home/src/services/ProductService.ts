import axios from "axios";

const CATEGORY_API_URL = "http://localhost:3000/api/v1/category"
const PRODUCT_API_URL = "http://localhost:3000/api/v1/product"
const CART_API_URL = "http://localhost:3000/api/v1/cart"

export const listCategory = ()=>{
  return axios.get(CATEGORY_API_URL);
}

export const listProduct = ()=>{
  return axios.get(PRODUCT_API_URL);
}

export const listProductByCategory = (categoryId)=>{
  return axios.get(`${PRODUCT_API_URL}/byCategory/${categoryId}`);
}

export const createNewCart = (cartName, userId)=>{
  return axios.post(CART_API_URL,{cartName,userId});
}

export const listUserCarts = (userId) => {
  return axios.get(`${CART_API_URL}/${userId}`);
}

export const addProductToCart = (cartId, productId) => {
  return axios.post(`${CART_API_URL}/${cartId}/${productId}`);
}