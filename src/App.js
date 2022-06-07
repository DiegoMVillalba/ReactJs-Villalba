import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './Components/NavBar/NavBar';
import Header from './Components/Header/Header';
import Body from './Components/Body/Body';
import { Btn } from './Components/BTN/Btn';




function App() {
    let Encabezado= "Kuma"

  return (
        <>
        <Header header={Encabezado}/>
        <NavBar />
        <Body/>
        <Btn/>
      
       
        </>
          
      
    );
}


export default App;
