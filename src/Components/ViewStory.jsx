import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useParams } from 'react-router-dom';



const ViewStory = ()=>{

  const {Id}=useParams();

const [view,setView]=useState(null);
//data fetching for click by story view
useEffect(()=>{
  fetch(`http://localhost:3000/story/${Id}`)
  .then((data)=>data.json())
  .then((data)=>setView(data))
  .catch((err)=>console.log(err));

},[Id])


  return (
   <>
   
<div className='view-story'>
   {view ?(
     <div>
     <img src={view.image} alt="Story full view" style={{ maxWidth: "100%" }} />
     <h3>{view.user.fullName}</h3>
   </div>
       


   ):(
   
      <p>stories loading</p>
    
   )}
</div>
   
   
   </>
  )
}

export default ViewStory