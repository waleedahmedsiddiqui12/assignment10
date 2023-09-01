import { useState } from "react";
import "./Posts.css";

function Posts() {
  const [title, setTitle] = useState("");
  const [body, setbody] = useState("");
  const [tags, setTags] = useState("");
  let counter = 0;

  function getData() {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((json) => {
 
        setTitle(json.posts[counter++].title);
        //console.log(json.posts[0].body);
        setbody(json.posts[counter++].body);

        setTags(json.posts[counter++].tags[0] + ','+ json.posts[counter++].tags[1]);
        console.log(counter);
      });
  }

  return (
    <>
      <div className="container">
        <h1>Posts</h1>
        <div className="reviews hide">
          <div className="box">
            <div className="profile">
              <div className="bio">
                <h2>{title}</h2>
                <h3>{tags}</h3>
              </div>
            </div>
            <div className="qoute">
              <p>{body}</p>
            </div>
          </div>
        </div>
        <button onClick={getData}>View Post</button>
      </div>
    </>
  );
}

export default Posts;
