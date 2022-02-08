import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Form1 from './Components/Form1';
import Login from './Components/Login';
import Temp from './Components/Temp';
function App() {
  return (
    <div className="App">
      <Temp />

      {/* <Form1 /> */}
    {/* <Router>
        <Routes>
    
        <Route  path="/" element={<Login />} />
            <Route  path="/" element={<Form1 />} />
        </Routes>
        </Router> */}
    </div>
  );
}

export default App;
