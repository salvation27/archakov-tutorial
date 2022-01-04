import React, { useState, useEffect } from "react";
import "./App.css";
import List from "./components/List/List";
import Form from "./components/Form/Form";

const App = () => {
  const [comments, setComments] = useState(
    JSON.parse(localStorage.getItem("comments")) || []
  );

  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);


  const addComment = (user, e) => {
    e.preventDefault();
    setComments([...comments, user]);
    console.log(comments);
  };

  const removeComment = (id) => {
    setComments(comments.filter((item) => item.id !== id));
  }

 


  return (
    <div className="App">
      <List comments={comments} removeComment={removeComment} />
      <Form addComment={addComment} />
      {/* <button onClick={addComments}>ggg</button> */}
    </div>
  );
};

export default App;
