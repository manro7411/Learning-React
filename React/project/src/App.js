import logo from './logo.svg';
import './App.css';


const Title = () => <h1>Hello React</h1>
const Description = () => <p>Record</p>
const Detail = () =>{
  return(
    <ul>
    <li> Traveller <span>200</span></li>
    <li> Traveller <span>300</span></li>
    <li> Traveller <span>400</span></li>
  </ul>
  )
}
 
function App() {
  return (
   <div>
   <Title/>
   <Description/>
   <Detail/>
   </div>
  );
}
export default App;
