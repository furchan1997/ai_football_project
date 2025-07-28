import { useEffect, useState } from "react";
import { news } from "../Services/ApI/NewsData";
import MatchResults from "./MatchResults";

function News() {
  const [fixture, setFixture] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      console.log("start fetching fixtures");
      try {
        const res = await news.getFixtureGames();
        console.log("API response:", res);
        setFixture(res);
      } catch (err) {
        console.error("Error in fetch:", err);
        setError(err.message || "Unknown error");
      }
    };

    fetch();
  }, []);

  if (error) return <div>שגיאה בטעינת המשחקים: {error}</div>;

  if (!fixture.length) return <div>טוען משחקים...</div>;

  const getGames = fixture
    .map((f) => {
      const home = f?.teams?.home?.name || "לא ידוע";
      const away = f?.teams?.away?.name || "לא ידוע";
      const homeScore = f?.score?.fulltime?.home;
      const awayScore = f?.score?.fulltime?.away;
      const homeLogo = f?.teams?.home?.logo;
      const awayLogo = f?.teams?.away?.logo;

      return {
        home: {
          team: home,
          score: homeScore !== null ? homeScore : "-",
          logo: homeLogo,
        },
        away: {
          team: away,
          score: awayScore !== null ? awayScore : "-",
          logo: awayLogo,
        },
      };
    })
    .slice(0, 20);

  return (
    <div className="d-flex flex-column text-center mx-auto m-0 w-75">
      <h2>חדשות הספורט</h2>
      <div>
        {getGames.map((g, index) => (
          <MatchResults
            key={index}
            homeTeam={g.home.team}
            homeScors={g.home.score}
            awayTeam={g.away.team}
            awayScors={g.away.score}
            homeLogo={g.home.logo}
            awayLogo={g.away.logo}
          />
        ))}
      </div>
    </div>
  );
}

export default News;
