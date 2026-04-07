import API from "../api/api";

export const getFooter = async () => {
  const res = await API.get("/footer/");
  return res.data;
};