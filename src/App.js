import './styles/App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import FAQ from "./pages/About/FAQ"
import Team from "./pages/Team/Team"
import Collaboration from './pages/Collaboration/Collaboration';
import Whitepaper from "./pages/Whitepaper/Whitepaper"
import Error from './pages/Error/Error';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Team />} />
        <Route path="/collaboration" element={<Collaboration />} />
        <Route path="/questions" element={< FAQ />} />
        <Route path="/whitepaper" element={<Whitepaper />} />
        <Route path="/explore" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
