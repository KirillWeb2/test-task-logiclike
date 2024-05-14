import axios from "axios";

const instance = axios.create({
  baseURL: "https://logiclike.com/",
});

export default instance;
