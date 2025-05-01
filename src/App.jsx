

import './App.css'
import HomePage from './Components/HomePage'
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom'
import ViewStory from './Components/ViewStory'
import Profile from './Components/Profile'
function App() {
 

  return (
    <>
  <Router>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/ViewStory/:id/:total" element={<ViewStory />} />
      <Route path="Profile" element={<Profile/>}/>
    </Routes>
  </Router>


    </>
  )
}

export default App
