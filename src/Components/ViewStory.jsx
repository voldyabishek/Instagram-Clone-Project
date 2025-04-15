import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
const ViewStory = ()=>{
const [view,setView]=useState([]);

//data fetching for click by story view
useEffect(()=>{
  fetch("http://localhost:3000/story")

})
}

  return (
   <>
   

   
   
   </>
  )
}

export default ViewStory