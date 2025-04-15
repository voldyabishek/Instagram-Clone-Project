import React from 'react'
import Sidebar from './Sidebar'
import Feed from './Feed'
import Suggestion from './Suggestion'



const HomePage = () => {
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

export default HomePage