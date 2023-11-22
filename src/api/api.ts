import axios from "axios";

const instance = axios.create({
  baseURL: "https://randomuser.me/api/",
});

export const api = {
  async getUsers(params: string) {
    try {
      return await instance.get(`${params}&seed=abc`);
    } catch (error) {
      console.error(error);
    }
  },
};
