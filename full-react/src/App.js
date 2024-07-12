import './App.css';
import Home from './Home';
import downlo from  './downlo.jpg';
function App() {
  const image=require('./downlo.jpg');
  return(
    <div className="App">
      <h1>Hello World</h1>
      <p>This is a test</p>
    

      <Home></Home>
      <img  src={downlo}></img>
      <img style={{width:"300px"}} src={image}></img>
    
    </div>
  );
}




export default App;
