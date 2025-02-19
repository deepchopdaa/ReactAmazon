
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import Menubar from './component/menubar';
import Slider1 from './component/Slider1';
import Card from './component/card';
import CardBlock from './component/CardBlock';
import CarouselComponent from "./component/owlcarasole"
import Footer from './component/Footer';
function App() {
  return (
    <div className="App">
      <Header/>
      <Menubar/>
      <Slider1/>
      <CardBlock/>  
      <CardBlock/>
      <CarouselComponent/>
      <Footer/>
    </div>
  );
}

export default App;
