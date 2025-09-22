import './App.css';
import BoardList from "./pages/BoardList";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/boadList" element={<BoardList />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
