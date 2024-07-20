import axios from "axios";

const CATEGORY_API_URL = "http://localhost:3000/api/v1/category"
const PRODUCT_API_URL = "http://localhost:3000/api/v1/product"

export const listCategory = ()=>{
  return axios.get(CATEGORY_API_URL);
}

export const listProduct = ()=>{
  return axios.get(PRODUCT_API_URL);
}