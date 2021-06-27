import './App.css';
import Header from './components/Header/Header';
import Registration from './components/Registration/Registration';
import Chat from './components/Chat/Chat'
import {Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header /> 
      <Route path={'/'} render={()=><Registration/>} exact/>
      <Route path={'/chat'} render={()=><Chat/>} exact/>
    </div>
  );
}

export default App;
