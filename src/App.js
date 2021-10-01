import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Friends from "./components/Friends";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import User from "./components/User";
function App() {
    return (
        <div className="App">
            <BrowserRouter>
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
                    <Route path="*">
                        <NotFound></NotFound>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
