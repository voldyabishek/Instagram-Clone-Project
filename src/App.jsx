import { useState } from 'react'
import Sidebar from './Components/Sidebar'
import Feed from './Components/Feed'
import Suggestion from './Components/Suggestion'
import './App.css'

function App() {
 

  return (
    <>
    <div className='d-flex vh-100'>
    <div className='w-20'> <Sidebar/></div>
    <div className='w-50 '> <Feed/></div>
    <div className='w-30'><Suggestion/></div>
    </div>
    </>
  )
}

export default App
