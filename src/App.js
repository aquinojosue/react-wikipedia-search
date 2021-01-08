import './App.css';
import Search from './Components/Search';

function App() {
  return(
    <div className="ui grid container center aligned">
      <div className="column nine wide">
        <h1>Mi app de búsqueda en wikipedia</h1>
        <Search/>
        <h4>2021 - Josué Aquino</h4>
      </div>
    </div>
  );
}

export default App;
