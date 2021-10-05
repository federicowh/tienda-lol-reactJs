import './global.css';
import 'boxicons';
import { Navbar } from './components/Navbar/Navbar';
import { HomeView } from './components/HomeView/HomeView';
import { Footer } from './components/Footer/Footer';

function App() {

  const footerTitle = 'Aquí va el Pie de Página';

  return (
    <>
      <Navbar />

      <HomeView />

      <Footer footerTitle={footerTitle}/>
    </>
  );
}

export default App;