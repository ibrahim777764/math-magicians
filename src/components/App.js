import '../App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Calculator from './Calculator';
import Footer from './Footer';
import Quote from './Quote';

const App = () => (
  <div className="App">
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/calculator">
              <Calculator />
            </Route>
            <Route path="/quote">
              <Quote />
            </Route>

          </Switch>
        </div>
        <Footer />

      </div>
    </Router>

  </div>
);

export default App;
