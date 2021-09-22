import {Route, Switch, useLocation } from "react-router-dom";
import Home from "./../pages/Home";
import Search from "./../pages/Search";
import Favorite from "./../pages/Favorite";
import History from "./../pages/History";
import BestSelling from "./../pages/BestSelling";
import Cart from './../pages/Cart';

const NoMatch = () => {
  let location = useLocation();

  return (
    <div>
      <h3>
        Ga ada di <code>{location.pathname}</code>
      </h3>
    </div>
  );
}

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/search">
        <Search />
      </Route>
      <Route exact path="/favorite">
        <Favorite />
      </Route>
      <Route exact path="/history">
        <History />
      </Route>
      <Route exact path="/best-selling">
        <BestSelling />
      </Route>
      <Route exact path="/cart">
        <Cart />
      </Route>
      {/* <Route exact path="/account">
        <Account />
      </Route> */}
      <Route path="*">
        <NoMatch />
        {/* <Redirect to="/" /> */}
      </Route>
    </Switch>
  );
};

export default Routes;