import React, { useEffect, useState } from "react";

const Comment = ({ id }) => {
  const [comments, setComments] = useState(null);
  console.log("comments", comments);

  const handleComments = async (id) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}/comments`
      );
      const result = await response.json();
      console.log("result", result);
      setComments(result);
    } catch (err) {
      console.log("error", err);
    }
  };

  useEffect(() => {
    handleComments(id);
  }, [id]);

  return (
    <div>
      <ul>
        {comments?.map((item, index) => (
          <li key={index}>
            <span>{item?.body}</span>
            <br />
            <span style={{ color: "red" }}>
              {item?.email ? item.email.split("@")[0] : ""}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comment;
