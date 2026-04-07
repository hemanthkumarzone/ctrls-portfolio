import axios from "axios";

export const loginUser = async (data: any) => {
  return axios.post("http://127.0.0.1:8000/api/login/", data);
};