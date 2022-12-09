import { api } from "./Axios";

export const postRegister = async (data) => {
  try {
    const respone = await api.post("/users", data);
    if (respone.status === 201) {
      return respone.data;
    }
    return null;
  } catch (e) {
    return null;
  }
};

export const getUsers = async () => {
  try {
    const respone = await api.get("/users");
    if (respone.status === 200) {
      const data = respone.data;
      return data;
    }
    return null;
  } catch (e) {
    return null;
  }
};
