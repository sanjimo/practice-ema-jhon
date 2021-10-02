import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import NotFound from './components/NotFound/NotFound';
import OrderReview from './components/OrderReview/OrderReview';
import ManageInventory from './components/ManageInventory/ManageInventory';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
            <Route exact path='/shop'><Shop></Shop></Route>
            <Route exact path='/'><Shop></Shop></Route>
            <Route exact path='/review'><OrderReview></OrderReview></Route>
            <Route exact path='/inventory'><ManageInventory></ManageInventory></Route>
            <Route path='*'><NotFound></NotFound></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
