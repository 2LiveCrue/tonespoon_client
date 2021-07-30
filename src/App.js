import './App.css';
import { Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from './components/Navigation/Navigation';
import AddAlbum from './components/Add/AddAlbum';


function App() {
  return (
    <div className="App">
      <Navigation />
      <Route path='/addalbum' exact component={AddAlbum} />
    </div>
  );
}

export default App;
