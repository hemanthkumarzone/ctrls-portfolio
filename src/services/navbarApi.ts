import API from "../api/api";

export const getNavbar = async () => {
  const res = await API.get("/navbar/");
  return res.data;
};