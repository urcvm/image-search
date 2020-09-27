import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID WITJ8k_JNOTJXp4qnkyspWhsiYU9Qs0P_QjvcsGQe4A",
  },
});
