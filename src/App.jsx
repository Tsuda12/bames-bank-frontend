import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Landing from './pages/Landing'
import Profile from './pages/Profile'


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/signup' element={<SignUp />}/>
        <Route path='/signin' element={<SignIn />}/>
        <Route path='/profile' element={<Profile />}/>
        <Route path='/' element={<Landing />}/>
      </Routes>
    </Router>
  )
}

export default App
