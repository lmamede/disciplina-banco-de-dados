import './App.scss';
import Arena from './pages/Arena/Arena';
import Game from './pages/Game/Game';
import GameProfile from './pages/Game/GameProfile';
import Home from './pages/Home/Home';
import Season from './pages/Season/Season';
import SeasonProfile from './pages/Season/SeasonProfile';
import Team from './pages/Team/Team';
import TeamProfile from './pages/Team/TeamProfile';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home /> }/>
          <Route path="/arenas" element={ <Arena /> }/>
          <Route path="/seasons" element={ <Season /> }/>
          <Route path="/seasons/profile" element={ <SeasonProfile /> }/>
          <Route path="/games" element={ <Game /> }/>
          <Route path="/games/profile" element={ <GameProfile /> }/>
          <Route path="/teams" element={ <Team /> }/>
          <Route path="/teams/profile" element={ <TeamProfile /> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
