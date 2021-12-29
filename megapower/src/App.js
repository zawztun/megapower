import './App.css';
import Footer from './components/footer/Footer';
import Mainpage from './components/mainpage/Mainpage';
import Navbar from './components/navbar/Navbar';
import Product from './components/product/Product';


function App() {
  return (
    <div className="App">
        <Navbar/>
        <Mainpage/>
        <Product/>
        <Footer/>

    </div>
  );
}

export default App;
