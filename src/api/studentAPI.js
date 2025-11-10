import axios from "axios";

// Change this to your backend URL if needed
const API_BASE = "http://localhost:5000";

export const getStudents = async () => {
  const response = await axios.get(`${API_BASE}/students`);
  return response.data;
};

export const getResults = async () => {
  const response = await axios.get(`${API_BASE}/results`);
  return response.data;
};
