import API from "../api/api";

export const getInfrastructure = async () => {
  const res = await API.get("/infrastructure/");
  return res.data;
};