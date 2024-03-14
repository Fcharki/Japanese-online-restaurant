import './App.css'
import About from './components/about';
import Home from './components/home';
import { NavBar } from './components/navbar';
import Menu from './components/menu';
import Footer from './components/footer';
import Search from './components/search';

function App() {

  return (
    <div className='app'>
      <NavBar />
      <Home />
      <About />
      <Menu />
      <Search/>
      <Footer />
    </div>
  )
}

export default App
