import btc from './img/bitcoin-btc-logo.png';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Bridge from './components/Bridge';
import Hero from './components/Hero';
import Contact from './components/ContactUs';
import About from './components/AboutUs';
import Subscribe from './components/Subscription';

function App() {
  return (
   <div>
      <Header/>
      <Hero/>
      <Bridge/>
      <Contact/>
      <About/>
      <Subscribe/>
      <Footer/>
</div>
  
  );
}

export default App;
