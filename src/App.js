import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Products from './Components/Products';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import {Helmet} from "react-helmet";

function App() {
  return (
    
    <div className="App">
    <Helmet>
      <title>Dhanshree Agrotech</title>
      <meta name='description' content='' />
    </Helmet>

     <Navbar/>
     <Hero/>
     <Products/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
