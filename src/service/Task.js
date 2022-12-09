import { api } from "./Axios";

export const getTasks = async () => {
  try {
    const respone = await api.get("/tasks");
    if (respone.status === 200) {
      const data = respone.data;
      return data;
    }
    return null;
  } catch (e) {
    return null;
  }
};
