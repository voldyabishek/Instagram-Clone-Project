import React from "react";
import { useState, useEffect } from "react";
import "../CssComponents/Posts.css";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  // data fetching naa use panathu dummy data use panran db.json
  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((data) => data.json())
      .then((data) => setPosts(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div>
        {posts.length > 0 ? (
          <div>
            {posts.map((post) => (
              <div key={post.id}>
                <div>
                  {/* profile pic */}
                  <img
                    src={post.user.profilePic}
                    className="rounded-circle"
                    id="profile-pic"
                    alt="profile picture"
                  />
                  <h5>{post.user.username}</h5>
                </div>
                {/* post pic */}
                <img src={post.image} alt="post" id="post" />

                <>
                 <b> {post.likes}</b>
               </>
                  
              </div>

                       
                
               
                  



            ))}
            ;
          </div>
        ) : (
          <div>Loading Posts</div>
        )}
      </div>
    </>
  );
};

export default Posts;
