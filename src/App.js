import './App.css';
import Dropdown from './components/Dropdown/Dropdown';
import { dropdownOptions } from './App.constants';

function App() {

  return (
    <div className="App">
      <Dropdown optionsList={dropdownOptions} onSelect={(val)=>{console.log(val)}}  />
    </div>
  );
}

export default App;
