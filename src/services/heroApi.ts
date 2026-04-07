import API from "../api/api";

export const getHero = async () => {
  const res = await API.get("/hero/");
  return res.data;
};