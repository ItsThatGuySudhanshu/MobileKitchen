import { Route, Routes} from "react-router";
import { Switch } from "react-router";
import Home from './components/Home'
import MenuBar from './components/MenuBar';
import ProtectedRoute from "./components/auth0/ProtectedRoute";
import Inventory from "./components/Inventory";
import Recipes from "./components/Recipes";
import Footer from "./components/Footer";

function App() {
  return (
    <div id="app">
        <MenuBar/>
      <div>
        <Switch>
          <Route path="/" exact component={Home} />

          <ProtectedRoute path="/inventory" exact component={() => <Inventory />} />

          <ProtectedRoute path="/recipes" exact component={() => <Recipes />} />
        </Switch>
      </div>
      <div>
        <Footer />
      </div>

    </div>
  );
}

export default App;
