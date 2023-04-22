import Home from "./routes/Home";
import './App.css'
import { 
  HashRouter as Router,
  Route, 
  Routes 
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;