import logo from './logo.svg';
import './App.css';
import Header from './components/TwoHeader';
import HeroSlider from './components/HeroSlider';
import Sigles from './components/Sigles';
import Spacing from './components/Spacing';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="App bg-black">
      <Header />
      <HeroSlider />
      <Sigles />
      <Spacing />
      <ProductList />
    </div>
  );
}

export default App;

