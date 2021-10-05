import './global.css';
import 'boxicons';
import { Navbar } from './components/Navbar/Navbar';
import { HomeView } from './components/HomeView/HomeView';
import { Footer } from './components/Footer/Footer';

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