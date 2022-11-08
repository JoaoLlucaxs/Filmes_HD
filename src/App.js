import {BrowserRouter} from 'react-router-dom'
import Route from './route/route';
import Header from './Component/Header/Header'


function App() {
  return (
      <BrowserRouter>
      <Header/>
      <Route/>
    </BrowserRouter>
  );
}

export default App;
