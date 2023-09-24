import { BrowserRouter, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import { Signup } from './signup';
import { Login } from './login';
import { Mainpage } from './mainpage';
import { Service } from './servicepage';
import { Update } from './updatepage';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={[<Signup/>]}/>
      <Route path='/Login' element={[<Login/>]}/>
      <Route path='/Mainpage' element={[<Mainpage/>]}/>
      <Route path='/service' element={[<Service/>]}/>
      <Route path='/Update/:id' element={[<Update/>]}/>
      
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;