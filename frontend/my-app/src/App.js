
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Teams from "./components/Teams";
import CupWinners from "./components/CupWinners";
import Players from "./components/Players";

function App() {

  return (
    <div>
      <Router>
      <Navbar />
     <Dashboard />
     <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/teams" element={<Teams />} />
      <Route path="/CupWinners" element={<CupWinners />} />
      <Route path="/Players" element={<Players />} />
      <Route path="/" element={<Dashboard />} />
     </Routes>
     </Router>
    </div>
  );
}

export default App;
