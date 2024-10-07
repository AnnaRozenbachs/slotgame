import './App.css';
import Game from './Components/Game.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
library.add(fas, fab, far)


function App() {
  return (
    <div className="App">
      <header className="App-header">     
        <Game/>
      </header>
    </div>
  );
}

export default App;
