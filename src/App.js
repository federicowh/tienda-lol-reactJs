import './App.css';
import 'boxicons';
import { Navbar } from './components/1-Navbar/Navbar';
import { HomeView } from './components/2-HomeView/HomeView';
import { Footer } from './components/3-Footer/Footer';

function App() {
  return (
    <>
      <Navbar />

      <HomeView />

      <Footer />
    </>
  );
}

export default App;