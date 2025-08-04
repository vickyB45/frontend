import axios from "axios";

const axiosBaseUrl = axios.create({
  baseURL: "https://node-backend-ger9.onrender.com/api",
  withCredentials: true, // ⭐️ for cookie to be saved
});

export const sendEnquery = async (value) => {
  try {
    const res = await axiosBaseUrl.post("/enquiry", value);
    return res.data;
  } catch (error) {
    console.error("Send enquiry failed:", error);
    throw error;
  }
};



export const LoginAsAdmin = async (value) => {
  try {
    const res = await axiosBaseUrl.post("/admin/login", value);
    return res.data; // success response
  } catch (error) {
    // 🔥 Smart error handling
    const msg =
      error?.response?.data?.message || "Something went wrong during login.";
    console.error("Admin login failed:", msg);
    throw new Error(msg); // 👈 throw a clear message
  }
};
export const getAllUserData = async () => {
  try {
    const res = await axiosBaseUrl.get("/admin/data");
    return res.data; // success response
  } catch (error) {
    // 🔥 Smart error handling
    const msg =
      error?.response?.data?.message || "Something went wrong during login.";
    console.error("Admin login failed:", msg);
    throw new Error(msg); // 👈 throw a clear message
  }
};