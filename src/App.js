import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Home/Hero'
import Shop from './Components/Home/Shop'
import Products from './Components/Home/Products';
import Harmonious from './Components/Home/Harmonious.jsx'
import Tranding from './Components/Home/Tranding.jsx'

function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Products/>
    <Harmonious/>
    <Tranding/>
    <Shop/>
    <Footer/>
    </>
  );
}

export default App;
