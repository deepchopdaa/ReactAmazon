
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import Menubar from './component/menubar';
import Slider1 from './component/Slider1';
import Card from './component/card';
import CardBlock from './component/CardBlock';


function App() {
  return (
    <div className="App">
      <Header/>
      <Menubar/>
      <Slider1/>
      <CardBlock/>
      <CardBlock/>
    </div>
  );
}

export default App;
