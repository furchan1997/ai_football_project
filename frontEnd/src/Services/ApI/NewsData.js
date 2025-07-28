import { httpService } from "../httpServices";

const KEY = import.meta.env.VITE_API_KEY_FOOTBALL;

// const API = api;

function getTodayDate() {
  const today = new Date();

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  const dailyDay = `${year}-${month}-${day}`;

  return dailyDay;
}
getTodayDate();

async function getFixtureGames() {
  const getDailyDay = getTodayDate();

  try {
    const res = await httpService.get(
      `https://v3.football.api-sports.io/fixtures?date=${getDailyDay}`,
      {
        headers: {
          "x-apisports-key": import.meta.env.VITE_API_KEY_FOOTBALL,
        },
      }
    );
    return res.data.response;
  } catch (error) {
    console.error(
      "Error fetching fixtures:",
      error.response || error.message || error
    );
    throw error;
  }
}

export const news = {
  getFixtureGames,
};
