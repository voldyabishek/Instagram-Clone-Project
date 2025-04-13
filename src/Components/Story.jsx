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
      <div className="story">
        {stories.length > 0 ? (
          //map for stories
          <div>
            {stories.map((story) => {
              <div key={story.id}>
                <img  src={story.user.profilePic} alt="story pic"></img>
                
              </div>
            })}
          </div>
        ) : (
         
            <p>stories loading</p>
          
        )}
      </div>
    </>
  );
};

export default Story;
