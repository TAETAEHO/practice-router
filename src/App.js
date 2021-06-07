import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Switch, Link} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <nav>
        <ul className="Header-menu">
            <li className="menu">
              <Link to="/" style={{textDecoration:'none', color : 'black'}}>Home</Link>
            </li>
            <li className="menu">
              <Link to="/mypage" style={{textDecoration:'none', color : 'black'}}>MyPage</Link>
            </li>
            <li className="menu">
              <Link to="/dashboard" style={{textDecoration:'none', color : 'black'}}>Dashboard</Link>
            </li>
        </ul>
        <hr />
      </nav>
      <div className="link-menu">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/mypage">
            <MyPage />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </div>

    </div>
    </BrowserRouter>
  );
}

const Home = () => {
  return <h1>Home</h1>;
}

const MyPage = () => {
  return <h1>MyPage</h1>;
}

const Dashboard = () => {
  return <h1>Dashboard</h1>;
}

export default App;
