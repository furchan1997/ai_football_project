import { httpService } from "../httpServices";
import api from "../../../config.json";

const KEY = import.meta.env.VITE_API_KEY_NEWSDATA_IO;

// const API = api;

async function getSport5News() {
  const res = await httpService.get("https://newsdata.io/api/1/news", {
    params: {
      apikey: KEY,
      country: "il",
      language: "he",
      q: "כדורגל", // מילה אחת פשוטה כדי לקבל תוצאות רלוונטיות
    },
  });
  return res.data;
}

export const news = {
  getSport5News,
};
