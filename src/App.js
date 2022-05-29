import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './Components/NavBar/NavBar';
import Header from './Components/Header/Header';
import Body from './Components/Body/Body';




function App() {
    let Encabezado= "Kuma"

  return (
        <>
        <Header header={Encabezado}/>
        <NavBar />
        <Body/>
        
        
        </>
          
      
    );
}


export default App;
