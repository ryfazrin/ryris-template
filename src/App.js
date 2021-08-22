import { Toolbar } from "@material-ui/core";
import { useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Routes from './config/routes';
import ButtonCart from "./components/ButtonCart";
// import Account from './pages/account';

function App() {
  let location = useLocation();
  const ButtonShow = () => {
    if (location.pathname.match('/cart')){
      return null;
    }

    return <ButtonCart />;

    // if (typeof location.pathname == "string") {
    //   console.log("string");
    // } else {
    //   console.log("Not a string");
    // }
  }


  return (
    <>
      <Header />
      <Toolbar />

      <Routes />
      
      <ButtonShow />
      <Footer />
    </>
  );
}

export default App;
