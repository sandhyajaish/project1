import React from 'react';
import Self from './Self'
import Num from './Num';
import Signup from './components/Signup';
import Signin from './components/Signin';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from 'react-router-dom';



const App = () => {
  return (
    <div>
{/* <Signin/> */} 
<Router>  

<Routes>
    <Route exact path='/' element={<Signup/>}></Route>
    <Route exact path='/Signin' element={<Signin/>}></Route>
    {/* <Route exact path='/contact' element={< Contact />}></Route> */}
</Routes>
</Router>
    </div>
  )
}

export default App

