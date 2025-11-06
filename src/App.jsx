import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Entities from "./pages/Entities";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="bg-gray-50 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/entities" element={<Entities />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
