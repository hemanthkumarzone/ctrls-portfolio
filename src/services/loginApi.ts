import axios from "axios";

const url = `${import.meta.env.VITE_BASE_URL || "http://127.0.0.1:8000/api"}/login/`; // ✅ FIXED

export const loginUser = async (data: any) => {
  return axios.post(url, data);
};