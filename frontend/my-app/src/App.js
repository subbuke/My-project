import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Teams from "./components/Teams";
import CupWinners from "./components/CupWinners";
import Players from "./components/Players";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Dashboard />
        <CupWinners />
        <Players />
        <Teams />
      </div>
    </>
  );
}

export default App;
