import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './componenets/navBar';
import Home from './componenets/home';
import About from './componenets/about';
import Contact from './componenets/contact';
import Signup from './componenets/Signup';
import Signin from './componenets/Signin';
import { Route, Switch } from 'react-router-dom';
import Error from './componenets/Error';
function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/signin">
          <Signin />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>

        <Route>
          <Error />
        </Route>
      </Switch>
    </>
  );
}

export default App;
