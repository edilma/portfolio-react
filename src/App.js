import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx"
import Trident from "./components/Trident.jsx"
import Grids from "./components/Grids.jsx"


function App() {
  return (
  <><div className='parent-container'>
<Header/>
<Trident />
<Grids />
<Footer />
  </div>
  
  </>
  );
}

export default App;
