import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
    // <div className="App">
    //  <Home />
    // </div>
  );
}

export default App;
