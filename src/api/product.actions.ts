import axiosInstance from "./axios";

export const getProducts = async () => {
  try {
    const res = await axiosInstance.get("/products");
    return res.data;
  } catch (error) {
    console.error("error from getProducts:", error);
    return error;
  }
};

export const getProductById = async (id: string) => {
  try {
    const res = await axiosInstance.get(`/products/${id}`);
    return res.data;
  } catch (error) {
    console.error("error from getProductById:", error);
    return error;
  }
};
