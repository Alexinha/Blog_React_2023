import Navbar from './Navbar';
import Home from './Home';

function App() {
  
  /* dynamic values */


  /* the return values */
  return (
    // class is a js reserved word, so in JSX use className instead
    <div className="App"> 
    <Navbar></Navbar>
      <div className="content">
        <Home></Home>
      </div>
    </div>
  );
}

// export so it can be used in other files
export default App;
