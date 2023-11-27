import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Pages/home"
import Details from "./Pages/details"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:name/:age" element={<Details />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
