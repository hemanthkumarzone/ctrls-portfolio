import API from "../api/api";

export const submitDemoForm = async (formData: any) => {
  const res = await API.post("/demo-submit/", formData);
  return res.data;
};