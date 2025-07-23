import NavBar from "./NavBar";

function Header() {
  return (
    <div className="d-flex justify-content-between align-items-center p-3">
      <div className="flex-grow-1">
        <NavBar />
      </div>
      <div className="text-center flex-grow-1">
        <h1 className="m-0 fw-bold">המלצות הימורים עם בינה מלאכותית</h1>
      </div>
      <div className="flex-grow-1">
        <p>AI FOOTBALL BIT</p>
      </div>
    </div>
  );
}

export default Header;
