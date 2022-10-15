import './App.css';
import Body1 from './Body1';
import Body2 from './Body2';
import Narbar from './Narbar';
import Phota from './Phota';

function App() {
  return (
    <div className="App">
        {< Narbar/>}
        {< Body1/>}
        {< Body2/>}
        {< Phota/>}
    </div>
  );
}

export default App;
