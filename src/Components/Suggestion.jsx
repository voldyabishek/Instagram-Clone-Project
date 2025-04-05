import React from 'react'
import  { useState } from 'react';
import  { useEffect} from 'react';
import "../CssComponents/Suggestion.css"


const Suggestion = () => {


  const [profile,setProfile] = useState(null);
  // const [suggestions,setSuggestion] = useState([]);

  useEffect(()=>{
 
// for profile json data fetching
    fetch("http://localhost:3000/profile").
    then(data => data.json()).
    then(data => setProfile(data)).
    catch(err => console.log(err))

    // for suggestion json data fetching
    fetch("http://localhost:3000/suggestions").
    then(data => data.json()).
    then(data => setSuggestion(data)).
    catch(err => console.log(err))
  },[]); 

  return (
    <>
    <div>
         <div className='suggestion'>
      {profile  ?

     <div className='profile'>
      <img className='rounded-circle' src={profile.profilePic} alt="profile pic"/>
      <h5>{profile.username}</h5>
      <p className='ms-auto  text-primary'>Switch</p>
      <p> Your suggestion</p><br/>
      </div>
       :<p>Loading</p> }
       </div>
     </div>
    
    </>
  )
}

export default Suggestion