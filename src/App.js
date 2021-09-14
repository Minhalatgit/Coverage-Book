import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomeNew from "./screens/Home";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <HomeNew />
        {/* <Switch> */}
          {/* <Route exact path="/">
            <HomeNew />
          </Route> */}
          {/* <Route path="*">
            <h1>Not found</h1>
          </Route> */}
        {/* </Switch> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
