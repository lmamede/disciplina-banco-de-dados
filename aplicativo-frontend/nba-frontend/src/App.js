import './App.scss';
import Arena from './pages/Arena/Arena';
import Home from './pages/Home/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home /> }/>
          <Route path="/arenas" element={ <Arena /> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
