import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://amara-hngtask-chrome-extension.onrender.com/",
});

export default axiosInstance;
