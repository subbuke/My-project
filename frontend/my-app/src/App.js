
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Players from "./components/Players";
import CskPlayers from "./components/TeamPlayers/CskPlayers";

function App() {

  return (
    <div>
     <Navbar />
     <Dashboard />
    <Players />
    <CskPlayers />
    </div>
  );
}

export default App;
