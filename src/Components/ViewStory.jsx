import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useParams,Link, useNavigate } from 'react-router-dom';

import "../CssComponents/ViewStory.css"
//icons
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";

const ViewStory = ()=>{

  const {id,total}=useParams();


const [story,setStory]=useState(null);

const navigate =useNavigate()
//data fetching for click by view story
useEffect(()=>{
  fetch(`http://localhost:3000/story/${id}`)
  .then(data=>data.json())
  .then(data => setStory(data))
  .catch((err)=>console.log(err));

},[id])
//if condition for not go for illtha next stories 
if(id > total || id <=0){
  navigate('/');
}
      
  return (
   <>
   
<div className='view-story'>
   {story ?(
     <div className='story-img-content'>
        <div key={story.id}> 
     < Link to={`http://localhost:5173/ViewStory/${Number(id)-1}/${total}`}><IoIosArrowDropleft className='story-change-arrow' /></Link>
    {/* <img src={`/images/${story.user.profilePic}`} alt="Story images" /> */}
    <img src={`http://localhost:3000/${story.image}`} alt="Story images" />
    < Link to={`http://localhost:5173/ViewStory/${Number(id)+1}/${total}`}> <IoIosArrowDropright className='story-change-arrow'/></Link>
     <h3  className='story-username'>{story.user.fullName}</h3>
   </div>
       
   
      
</div>
   ):(
   
      <p>stories loading</p>
    
   )}
</div>
   
  
   </>
  )
}

export default ViewStory;