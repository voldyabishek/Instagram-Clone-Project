import React from "react";
import { useState, useEffect } from "react";
import "../CssComponents/Posts.css";

// icons
import { FiHeart } from "react-icons/fi"; //like icon
import { FaRegComment } from "react-icons/fa6";//comment icon
import { GoPaperAirplane } from "react-icons/go";
import { AiOutlineRetweet } from "react-icons/ai"; //retweet icon


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
      <div className="Post-page">
        {posts.length > 0 ? (
          <div className="All-posts">
            {posts.map((Post) => (
              <div key={Post.id}>
                <div className="profile ">
                  {/* profile pic */}
                  <img src={Post.user.profilePic} className="rounded-circle" id="profile-pic" alt="profile picture" />
                  <h5>{Post.user.username}</h5>
                  </div>
                {/* Post pic */}
                <div className="post-imgs">
                <img src={Post.image} alt="Post" id="post-img" />
                </div>
                
               <div className="lcs-icons">
             {/* like,comment,share=>lcs-icons */}
             <FiHeart/>
             <FaRegComment />
             <GoPaperAirplane />
             <AiOutlineRetweet/>
               </div>
               <div>
                <p>{Post.likes}Likes and others</p>
                <p>{Post.description}</p>
                <p>{Post.caption}</p>

               </div>
    
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
