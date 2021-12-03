import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Context/AuthProvider/AuthProvider";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import Explore from "./Pages/Explore/Explore";
import GiveReview from "./Pages/GiveReview/GiveReview";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login";
import Myorders from "./Pages/Myorders/Myorders";
import NotFound from "./Pages/NotFound/NotFound";
import Payment from "./Pages/Payment/Payment";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
import Purchase from "./Pages/Purchase/Purchase";
import Registration from "./Pages/Registration/Registration";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/explore">
              <Explore />
            </PrivateRoute>
            <PrivateRoute path="/purchase/:id">
              <Purchase />
            </PrivateRoute>
            <PrivateRoute path="/payment">
              <Payment />
            </PrivateRoute>
            <PrivateRoute path="/myorders">
              <Myorders />
            </PrivateRoute>
            <PrivateRoute path="/review">
              <GiveReview />
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <Route path="/registration">
              <Registration />
            </Route>
            <Route exact path="/*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
