
import './App.css';
import { Link,Routes,Route } from "react-router-dom";
import Login from './components/login/Login';
import Home from './views/Home';
import CalendarParent from './components/calendar/CalendarParent';


function App() {
  return (
    <div className="App">
    
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/calendar" element={<CalendarParent/>} />
    </Routes>

    </div>
  );
}

export default App;
