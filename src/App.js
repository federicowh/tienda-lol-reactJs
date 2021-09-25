import './App.css';
import 'boxicons';
import {Encabezado} from './components/1-encabezado/encabezado';
import {Contenido} from './components/2-contenido/contenido';
import {Pie} from './components/3-pie/pie';

function App() {
  return (
    <>
      <Encabezado/>
      <Contenido/>
      <Pie/>
    </>
  );
}

export default App;