import './App.css';
import BoardList from './pages/BoardList';
import BoardWrite from './pages/BoardWrite';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/boardList" element={<BoardList />} />
                <Route path="/boardWrite" element={<BoardWrite />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;