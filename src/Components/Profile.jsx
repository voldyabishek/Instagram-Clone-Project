import React, { useState,useEffect } from 'react'
import axios from 'axios'
import "../CssComponents/Profile.css"

function Profile() {
  const [profile,setProfile]=useState(null)

  const [followers,setFollower]=useState([])

  useEffect(()=>{
    axios.get("http://localhost:3000/profile")
    //.then ((data)=>data.json())
    .then(data =>setProfile(data.data))
    .catch ((err)=>console.log(err))

    //for follwers
    axios.get("http://localhost:3000/followers")
    .then(data=>setFollower(data.data))
    .catch ((err)=>console.log(err))
  },[])

//this function for handle onchange -->for input instant onChange
function HandleOnChange(e){
  setProfile(prev =>({
    ...prev,
    [e.target.name]:e.target.value
  }))
}
//this function for update button for-->put method(update method edit json data)
const handleUpdate =async ()=>{
  axios.put("http://localhost:3000/profile",profile)
  .then(console.log("updated"))
  .catch((err)=>console.log(err))
}

  return (
    <>
    <div className='profile-container'>
      {profile ? (
        <div>
           
           <img src={profile.profilePic} alt='your profile pic' className='profile-img'/>
           <h5>{profile.username}</h5>
            
          <input type="text" 
                  name="username" 
                 value={profile.username} 
                 className='profile-input form-control'  
                onChange={HandleOnChange}/> <br/>

          <input type="text" name="profilePic" value={profile.profilePic} className='profile-input form-control 'onChange={HandleOnChange}/>
          <button type="submit" className='my-4 btn btn-primary' onClick={handleUpdate}>update</button>
        </div>
      ):(
        <p>loading profile</p>
      )}

      {followers.length >0 ?(

           followers.map(follower =>(
            <div key={follower.id}>
             <h5>{follower.username}</h5>
            </div>
           ))

      ):(
       <div>loading</div>
      )}

    </div>
    </>


  )
}

export default Profile;