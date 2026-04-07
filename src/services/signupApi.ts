import axios from "axios";
const url = `${import.meta.env.VITE_BASE_URL || "http://127.0.0.1:8000/api"}/signup/`;

export const signupUser = (data: any) => {
  return axios.post(url, data);
};