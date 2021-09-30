import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";
import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import Home from "./components/Home";
import User from "./components/User";

function App() {
    return (
        <Fragment>
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/user">User</Link>
                            </li>
                            <li>
                                <Link to="/header">Header</Link>
                            </li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/user">
                            <User />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                        <Route path="header">
                            <Header />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </Fragment>
    );
}

export default App;
