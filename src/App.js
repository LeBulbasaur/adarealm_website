import './styles/App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import FAQ from "./pages/About/FAQ"
import Team from "./pages/Team/Team"
import Collaboration from './pages/Collaboration/Collaboration';
import NewsSite from "./pages/News/NewsSite"
import Whitepaper from "./pages/Whitepaper/Whitepaper"
import Policy from "./pages/Policy/Policy"
import Credits from './pages/Credits/Credits';
import Error from './pages/Error/Error';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Team />} />
        <Route path="/collaboration" element={<Collaboration />} />
        <Route path="/questions" element={< FAQ />} />
        <Route path="/news" element={< NewsSite />} />
        <Route path="/whitepaper" element={<Whitepaper />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/credits" element={<Credits />} />
        <Route path="/explore" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
