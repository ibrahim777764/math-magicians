/* eslint-disable no-unused-vars */

import '../App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import calculator from '../logic/calculate';
// import ButtonPanel from './ButtonPanel';
// import Display from './Display';
import Navbar from './Navbar';
import Home from './Home';
import Calculator from './Calculator';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       total: null,
//       next: null,
//       operation: null,
//     };
//   }

//   handleClick = buttonName => {
//     const calc = calculator.calculate(this.state, buttonName);
//     this.setState(calc);
//   }

//   render() {
//     const showResult = state => {
//       const { total, next, operation } = state;
//       const result = `${total}${operation}${next}`.replace(/null/g, '');
//       return result === '' ? undefined : result;
//     };
//     return (
//       <div className="App">

//         <Display result={showResult(this.state)} />
//         <ButtonPanel clickHandler={this.handleClick} />
//       </div>
//     );
//   }
// }

// export default App;

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

          </Switch>
        </div>

      </div>
    </Router>

  </div>
);

export default App;
