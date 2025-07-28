function MatchResults({
  homeTeam,
  awayTeam,
  homeScors,
  awayScors,
  homeLogo,
  awayLogo,
}) {
  return (
    <div className="card my-3 shadow-sm" style={{ maxWidth: "400px" }}>
      <div className="card-body d-flex justify-content-between align-items-center">
        {/* קבוצה ביתית */}
        <div className="text-center flex-grow-1">
          {homeLogo && (
            <img
              src={homeLogo}
              alt={`${homeTeam} logo`}
              className="rounded-circle mb-2"
              style={{ width: "60px", height: "60px", objectFit: "cover" }}
            />
          )}
          <h5 className="mb-0 fw-bold">{homeTeam}</h5>
          <p className="display-6 mb-0">{homeScors ?? "-"}</p>
        </div>

        {/* פס הפרדה */}
        <div className="mx-3 fw-bold fs-4">:</div>

        {/* קבוצה חוץ */}
        <div className="text-center flex-grow-1">
          {awayLogo && (
            <img
              src={awayLogo}
              alt={`${awayTeam} logo`}
              className="rounded-circle mb-2"
              style={{ width: "60px", height: "60px", objectFit: "cover" }}
            />
          )}
          <h5 className="mb-0 fw-bold">{awayTeam}</h5>
          <p className="display-6 mb-0">{awayScors ?? "-"}</p>
        </div>
      </div>
    </div>
  );
}

export default MatchResults;
