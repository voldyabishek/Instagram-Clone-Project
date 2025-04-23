

import './App.css'
import HomePage from './Components/HomePage'
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom'
import ViewStory from './Components/ViewStory'
function App() {
 

  return (
    <>
  <Router>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/ViewStory/:Id" element={<ViewStory />} />
    </Routes>
  </Router>


    </>
  )
}

export default App
