import {Router, Route} from 'react-router';
import Home from './components/Home'
function App() {
  return (
    <Router>
      <Route path="/">
        <Home />
      </Route>
    </Router>
  );
}

export default App;
