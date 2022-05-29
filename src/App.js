import './styles/App.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Roadmap from './components/roadmap/Roadmap';
import About from './components/about/About';
import News from './components/news/News';
import Info from './components/info/Info';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="app__content">
        <Hero />
        <Roadmap />
        <About />
        <News />
        <Info />
      </div>
      <Footer />
    </div>
  );
}

export default App;
