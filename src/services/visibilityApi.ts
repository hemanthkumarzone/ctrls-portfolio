import API from "../api/api";

export const getVisibility = async () => {
  const res = await API.get("/visibility/");
  return res.data;
};