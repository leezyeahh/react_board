import './App.css';
import BoardList from './pages/BoardList';
import BoardWrite from './pages/BoardWrite';
import BoardDetail from './pages/BoardDetail';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Button from './components/atoms/Button';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/boardList" element={<BoardList />} />
                <Route path="/boardWrite" element={<BoardWrite />} />
                <Route path="/boardDetail/:id" element={<BoardDetail />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;