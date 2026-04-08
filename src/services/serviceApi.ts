import API from "../api/api";

/**
 * 🔹 GET ALL SERVICES (11 cards)
 * Used in: ServicesSection.tsx
 */
export const getServices = async () => {
  try {
    const res = await API.get("/services/");
    return res.data;
  } catch (error) {
    console.error("Error fetching services:", error);
    return [];
  }
};

/**
 * 🔹 GET SERVICE DETAILS (Sections + Cards)
 * Used in: ServiceDetailsPage.tsx
 * Requires dropdown_id
 */
export const getServiceDetails = async (dropdownId: number) => {
  try {
    const res = await API.get(`/sections/?dropdown_id=${dropdownId}`);
    return res.data;
  } catch (error) {
    console.error("Error fetching service details:", error);
    return [];
  }
};

/**
 * 🔹 GET ALL DROPDOWNS (to map slug → dropdown_id)
 * Used in: ServiceDetailsPage.tsx
 */
export const getDropdowns = async () => {
  try {
    const res = await API.get("/dropdowns/");
    return res.data;
  } catch (error) {
    console.error("Error fetching dropdowns:", error);
    return [];
  }
};