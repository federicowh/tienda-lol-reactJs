import './App.css';
import 'boxicons';
import { Navbar } from './components/1-Navbar/Navbar';
import { HomeView } from './components/2-HomeView/HomeView';
import { Footer } from './components/3-Footer/Footer';

function App() {
  const title = '¡Hola! Bienvenido a la Tienda';
  const subTitle = 'Aquí podrás encontrar productos del videojuego League of Legends';

  const homeViewTitle = 'Aquí van los productos';

  const footerTitle = 'Aquí va el Pie de Página';

  return (
    <>
      <Navbar title={title} subTitle={subTitle} />

      <HomeView homeViewTitle={homeViewTitle} />

      <Footer footerTitle={footerTitle}/>
    </>
  );
}

export default App;