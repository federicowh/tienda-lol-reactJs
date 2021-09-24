// import logo from './logo.svg';
import './App.css';
import 'boxicons';

function App() {
  return (
    <div>
      <header id="encabezado">
        <h1 class="encabezado-tituloPrincipal">¡Hola! Bienvenido a la Tienda. <box-icon name='happy'></box-icon></h1>

        <p class="encabezado-parrafoPrincipal">Aquí podrás encontrar productos del videojuego League of Legends. <box-icon name='like' ></box-icon></p>
      </header>

      <main id="contenido">
        <p class="contenido-parrafoPrincipal">Aquí irán los productos</p>
      </main>

      <footer id="pie">
          <p class="pie-parrafoPrincipal">Pie de Página</p>
      </footer>
    </div>
  );
}

export default App;
