import './styles.css';
import About from './pages/About'
import Home from './pages/Home'
import { Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <div>
        <Link to="/about">About</Link>
        <Switch>
          <Route path="/" component={Home} exact />
          <div className="about-link">
          <Route path="/about" component={About} />
          </div>
        </Switch>
    </div>
  );
}

export default App;
