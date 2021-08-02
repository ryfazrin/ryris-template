import logo from './logo.svg';
import { Toolbar } from '@material-ui/core';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Search from './pages/Search';
import Favorite from './pages/Favorite';
import History from './pages/History';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Toolbar />
        
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
        </Switch>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
