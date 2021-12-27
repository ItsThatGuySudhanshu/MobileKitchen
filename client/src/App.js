import { Route, Routes} from "react-router";
import { Switch } from "react-router";
import Home from './components/Home'
import MenuBar from './components/MenuBar';
import ProtectedRoute from "./components/auth0/ProtectedRoute";
import Inventory from "./components/Inventory";
import Recipes from "./components/Recipes";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import About from "./components/About";
import { Container } from "react-bootstrap";
import './styles/app.css'

function App() {
  return (
    <div id="app">
      <MenuBar/>
      <Container id="content-container">
        <Switch>
          <Route path="/" exact component={Home} />

          <ProtectedRoute path="/inventory" exact component={() => <Inventory />} />

          <ProtectedRoute path="/recipes" exact component={() => <Recipes />} />
          <ProtectedRoute path="/profile" exact component={() => <Profile />} />
          <Route path="/about" exact component={() => <About />} />

        </Switch>
      </Container>

      <Footer />


    </div>
  );
}

export default App;
