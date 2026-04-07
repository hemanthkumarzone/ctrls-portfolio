import API from "../api/api";

export const getInfrastructure = async () => {
  const res = await API.get("/infrastructure/");
  const data = res.data;

  if (Array.isArray(data)) {
    return data;
  }

  if (data && Array.isArray(data.cards)) {
    return data.cards;
  }

  console.error("getInfrastructure: unexpected response shape", data);
  return [];
};