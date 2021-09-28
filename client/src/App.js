import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import Evento from './components/Evento/Evento' 

function App() {
  return (
    <BrowserRouter>
      <div className="App-header">
        <Switch>

          
          <Route exact path ='evento' component={Evento}/>
        
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
