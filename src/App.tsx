import "./App.css";
import Navbar from "./components/Navbar";
import Routing from "./components/Routing";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="app">
      <Navbar />
      <Routing />
      <Footer />
    </div>
  );
}

export default App;
