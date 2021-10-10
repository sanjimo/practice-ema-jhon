import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import NotFound from './components/NotFound/NotFound';
import OrderReview from './components/OrderReview/OrderReview';
import ManageInventory from './components/ManageInventory/ManageInventory';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import Shipping from './components/Shipping/Shipping';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/shop'><Shop></Shop></Route>
            <Route exact path='/'><Shop></Shop></Route>
            <Route exact path='/review'><OrderReview></OrderReview></Route>
            <PrivateRoute exact path='/inventory'><ManageInventory></ManageInventory></PrivateRoute>
            <PrivateRoute path='/placeorder'><PlaceOrder></PlaceOrder></PrivateRoute>
            <PrivateRoute path="/shipping"><Shipping></Shipping></PrivateRoute>
            <Route path='/login'><Login></Login></Route>
            <Route path='/register'><Register></Register></Route>
            <Route path='*'><NotFound></NotFound></Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
