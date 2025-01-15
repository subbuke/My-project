
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Teams from "./components/Teams";


function App() {

  return (
    <div>
      <Router>
      <Navbar />
     <Dashboard />
     <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/teams" element={<Teams />} />
     </Routes>
     </Router>
    </div>
  );
}

export default App;
