import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'

function App() {

  return (
    <Router>
      <div>
      <Navbar/>
        <Switch>
            <Route exact path = "/">
                <Home/>
            </Route>
            <Route path = "*">
                <h1>Not found</h1>
            </Route>
        </Switch>
      <Footer/>
      </div>
    </Router>
  );
}

export default App;
