import React, { useState } from "react";
import { useEffect } from "react";
import "../CssComponents/Story.css";
const Story = () => {
  const [stories, setStories] = useState([]);

  // data fetching for stories
  useEffect(() => {
    fetch("http://localhost:3000/story")
      .then((data) => data.json())
      .then((data) => setStories(data))
      .catch((err) => console.log(err));
      
  }, []);

  return (
    <>
      <div className="story-container">
        {stories.length > 0 ? (
          //map for stories
          <div className=" story-db-container d-flex">
            {stories.map((story) => (
              <div key={story.Id} className="mx-2">
                <div className="story-dp-border">
                <img  src={story.user.profilePic} alt="story pic" className="story-db "></img>
                </div>
                <p className="text-truncate" style={{width:"50px"}}>{story.user.username}</p>
                
              </div>
            ))}
          </div>
        ) : (
         
            <p>stories loading</p>
          
        )}
      </div>
    </>
  );
};

export default Story;
