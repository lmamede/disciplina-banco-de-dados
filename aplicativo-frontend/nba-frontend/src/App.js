import './App.scss';
import Arena from './pages/Arena/Arena';
import Game from './pages/Game/Game';
import Home from './pages/Home/Home';
import Season from './pages/Season/Season';
import Team from './pages/Team/Team';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home /> }/>
          <Route path="/arenas" element={ <Arena /> }/>
          <Route path="/seasons" element={ <Season /> }/>
          <Route path="/games" element={ <Game /> }/>
          <Route path="/teams" element={ <Team /> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
