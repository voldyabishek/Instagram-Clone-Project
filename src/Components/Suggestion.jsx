import React from 'react'
import  { useState } from 'react';
import  { useEffect} from 'react';
import "../CssComponents/Suggestion.css"


const Suggestion = () => {


  const [profile,setProfile] = useState(null);
  const [suggestions,setSuggestion] = useState([]);

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
      </div>
       :<p>Loading</p> }

      <div className='d-flex '><br/>
      <p>Suggested for you</p>
      <b className='  ms-auto '>See All</b>

      </div>
      {/* this div for suggestion list data mapping */}
           <div  >

            {suggestions.length > 0 ?(
              <div>
              {suggestions.map((suggestion)=>(
                       

                       <div className='suggestions'  key={suggestion.id}>
                            <div className='suggestion-list '>
                              <img className="rounded-circle"src={suggestion.profilePic}></img>
                              <h5>{suggestion.username}</h5>
                              <p className='text-primary  '>Follow</p>
                            </div>
                       </div>

              ))}
              </div>
            ):(
              <div>
                <p>Loading</p>
              </div>
            )}
           </div>
           

       </div>

     </div>
    
    </>
  )
}

export default Suggestion