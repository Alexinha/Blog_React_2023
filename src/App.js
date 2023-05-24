import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // destruct the react-router-dom package

function App() {
  
  /* dynamic values */


  /* the return values */
  return (
    // surround the component with <Router>
    <Router>
      {/* // class is a js reserved word, so in JSX use className instead */}
      <div className="App"> 
      {/* navbar is always shown regardless which page it is */}
      <Navbar></Navbar>
        <div className="content">
          <Switch>
            {/* route for the homepage component */}
            <Route exact path="/">
              {/* when visit homepage, show home component aka blogs  */}
              <Home></Home>
            </Route>
            <Route path="/create">
              <Create></Create>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

// export so it can be used in other files
export default App;
