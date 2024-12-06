import axios from "axios";

const product = axios.create({
  baseURL: "https://strapi-store-server.onrender.com/api/",
});

export default product;
