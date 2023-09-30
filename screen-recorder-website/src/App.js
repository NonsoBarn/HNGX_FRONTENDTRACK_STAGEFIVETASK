import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Howitworks from "./components/Howitworks";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App bg-gray-50">
      <Navbar />
      <Hero />
      <Features />
      <Howitworks />
      <Footer />
    </div>
  );
}

export default App;
