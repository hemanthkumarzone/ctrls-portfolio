import axios from "axios";

export const signupUser = (data: any) => {
  return axios.post("http://127.0.0.1:8000/api/signup/", data);
};