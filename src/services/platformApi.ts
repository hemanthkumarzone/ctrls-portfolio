import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL || "http://127.0.0.1:8000/api";

export const getSectionsByDropdown = (dropdownId: number) => {
  return axios.get(`${BASE_URL}/sections/?dropdown_id=${dropdownId}`);
};