import './App.css';
import { Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from './components/Navigation/Navigation';
import AddAlbum from './components/Add/AddAlbum';
import Display from './components/Display/Display'


function App() {
  return (
    <div className="App">
      <Navigation />
      <Route path='/' exact component={Display} />
      <Route path='/addalbum' exact component={AddAlbum} />
    </div>
  );
}

export default App;
