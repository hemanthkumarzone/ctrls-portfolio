import API from "../api/api";

export const getVisibility = async () => {
  const res = await API.get("/visibility/");
  const data = res.data;

  if (Array.isArray(data) && data.length > 0) {
    return data[0];
  }

  if (data && typeof data === "object" && Array.isArray(data.cards)) {
    return data;
  }

  console.error("getVisibility: unexpected response shape", data);
  return null;
};