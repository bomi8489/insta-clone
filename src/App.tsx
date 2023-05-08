import Home from "./routes/Home";
import './App.css'
import {
  HashRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Profile from "./routes/Profile";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/b.__.omi" element={<Profile />}></Route>
      </Routes>
    </Router>
  );
}

export default App;