import API from "../api/api";

export const getServices = async () => {
  const res = await API.get("/services/");
  return res.data;
};