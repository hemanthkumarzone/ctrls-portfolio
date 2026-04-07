import API from "../api/api";

export const getDemo = async () => {
  const res = await API.get("/demo/");
  return res.data;
};