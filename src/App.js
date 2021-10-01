import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import FriendDetail from "./components/FriendDetail";
import Friends from "./components/Friends";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import User from "./components/User";
function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <nav>
                    <li>
                        <NavLink
                            activeStyle={{
                                fontWeight: "bold",
                                color: "red",
                            }}
                            className="NavLink"
                            to="/home"
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            activeStyle={{
                                fontWeight: "bold",
                                color: "red",
                            }}
                            className="NavLink"
                            to="/about"
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className="NavLink"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "red",
                            }}
                            to="/friends"
                        >
                            Friends
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            activeStyle={{
                                fontWeight: "bold",
                                color: "red",
                            }}
                            className="NavLink"
                            to="/user"
                        >
                            Users
                        </NavLink>
                    </li>
                </nav>
                <Switch>
                    <Route path="/home">
                        <Home></Home>
                    </Route>

                    <Route exact path="/">
                        <Home></Home>
                    </Route>
                    <Route path="/about">
                        <About></About>
                    </Route>
                    <Route path="/friends">
                        <Friends></Friends>
                    </Route>
                    <Route path="/user">
                        <User></User>
                    </Route>
                    <Route path="/friend/:friendID">
                        <FriendDetail></FriendDetail>
                    </Route>
                    <Route path="*">
                        <NotFound></NotFound>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
