import NavMenu from './components/NavMenu';
import Footer from './page/Footer';
import Header from './page/Header';
import MainContent from './page/MainContent';
import './style/App.css'

function App() {
  return (
    <div>
      <NavMenu />
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;