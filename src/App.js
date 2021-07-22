import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,
Switch,
Route } from "react-router-dom";
import Navbar from './navbar';
import Home from './homepage';
import AboutMe from './about';
import Work from './work';
import Contact from './contact';

function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Switch>
      <Route path="/" component={Home} exact={true}/>
      <Route path="/aboutme" component={AboutMe} exact={true}/>
      <Route path="/mywork" component={Work} exact={true}/>
      <Route path="/contactme" component={Contact} exact={true}/>
    </Switch>
    </Router>
    </>
  );
}

export default App;
