import { Toolbar } from "@material-ui/core";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ButtonCart from "./components/ButtonCart";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Favorite from "./pages/Favorite";
import History from "./pages/History";
import BestSelling from "./pages/BestSelling";
import Cart from './pages/Cart';
import Account from './pages/account';

const Routes = () => {
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
      <Route exact path="/account">
        <Account />
      </Route>
      <Route path="*" component={Home} />
    </Switch>
  );
};

function App() {
  return (
    <>
      <BrowserRouter basename="/ryris-template">
        <Header />
        <Toolbar />

        <Routes />

        <ButtonCart />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
