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

  // const onMoveUser = (arr) => {
  //   console.log('был клик',arr)
  // }

  return (
    <div className="App">
      <List comments={comments} />
      <Form addComment={addComment} />
      {/* <button onClick={addComments}>ggg</button> */}
    </div>
  );
};

export default App;
